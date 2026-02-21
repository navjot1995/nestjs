import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { ArticlesService } from '../articles.service';

@Injectable()
export class ArticleOwnerGuard implements CanActivate {
  constructor(private articlesService: ArticlesService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    console.log('Article owner guard activated');
    const request = context.switchToHttp().getRequest<{
      user?: { userId: string };
      params: { id?: string };
    }>();
    const user = request.user;
    const articleId = request.params.id;

    if (!user || !articleId) {
      return false;
    }

    const article = await this.articlesService.findOne(articleId);
    return article?.author._id.toString() === user.userId;
  }
}
