import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Article } from '../schemas/article.schema';
import { CreateArticleDto, ArticleStatus } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

interface ArticleQuery {
  page?: number;
  limit?: number;
  status?: string;
  author?: string;
  search?: string;
}

interface ArticleFilter {
  status?: string;
  author?: Types.ObjectId;
  $text?: { $search: string };
}

@Injectable()
export class ArticlesService {
  constructor(
    @InjectModel(Article.name) private articleModel: Model<Article>,
  ) {}

  async create(
    createArticleDto: CreateArticleDto,
    userId: string,
  ): Promise<Article> {
    const article = new this.articleModel({
      ...createArticleDto,
      author: new Types.ObjectId(userId),
      publishedAt:
        (createArticleDto.status as any) === 'published'
          ? new Date()
          : undefined,
    });
    return article.save();
  }

  async findAll(query: ArticleQuery = {}): Promise<Article[]> {
    const { page = 1, limit = 10, status, author, search } = query;
    const skip = (page - 1) * limit;

    const filter: ArticleFilter = {};

    if (status) {
      filter.status = status;
    }

    if (author) {
      filter.author = new Types.ObjectId(author);
    }

    if (search) {
      filter.$text = { $search: search };
    }

    return this.articleModel
      .find(filter)
      .populate('author', 'name email')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .exec();
  }

  async findOne(id: string): Promise<Article> {
    // Increment view count
    await this.articleModel.findByIdAndUpdate(id, { $inc: { views: 1 } });

    const article = await this.articleModel
      .findById(id)
      .populate('author', 'name email')
      .exec();

    if (!article) {
      throw new NotFoundException('Article not found');
    }

    return article;
  }

  async findByAuthor(authorId: string): Promise<Article[]> {
    return this.articleModel
      .find({ author: new Types.ObjectId(authorId) })
      .populate('author', 'name email')
      .sort({ createdAt: -1 })
      .exec();
  }

  async update(
    id: string,
    updateArticleDto: UpdateArticleDto,
    userId: string,
  ): Promise<Article> {
    const article = await this.articleModel.findById(id);

    if (!article) {
      throw new NotFoundException('Article not found');
    }

    // Check if user is the author
    if (article.author.toString() !== userId) {
      throw new ForbiddenException('You can only update your own articles');
    }

    // If status is changing to published and wasn't published before
    const isPublished = (s: string) => s === 'published';
    if (
      updateArticleDto.status === ArticleStatus.PUBLISHED &&
      !isPublished(article.status)
    ) {
      updateArticleDto['publishedAt'] = new Date();
    }

    const updatedArticle = await this.articleModel
      .findByIdAndUpdate(
        id,
        { $set: updateArticleDto },
        { new: true, runValidators: true },
      )
      .populate('author', 'name email')
      .exec();

    if (!updatedArticle) {
      throw new NotFoundException('Article not found');
    }

    return updatedArticle;
  }

  async remove(id: string, userId: string): Promise<void> {
    const article = await this.articleModel.findById(id);

    if (!article) {
      throw new NotFoundException('Article not found');
    }

    // Check if user is the author
    if (article.author.toString() !== userId) {
      throw new ForbiddenException('You can only delete your own articles');
    }

    await this.articleModel.findByIdAndDelete(id).exec();
  }

  async getStats(): Promise<any> {
    const stats = await this.articleModel.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 },
          totalViews: { $sum: '$views' },
        },
      },
    ]);

    const totalArticles = await this.articleModel.countDocuments();

    return {
      totalArticles,
      stats,
    };
  }
}
