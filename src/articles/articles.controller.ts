import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
  Query,
  HttpStatus,
} from '@nestjs/common';
import type { Request as ExpressRequest } from 'express';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { AuthGuard } from '@nestjs/passport';
import { ArticleOwnerGuard } from './guards/article-owner.guard';
import { ValidateUser } from 'src/common/interfaces/user-payload.interface';
import { ArticleResponseDto } from './dto/article-response.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiQuery,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';

@ApiTags('Articles')
@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Create a new article',
    description:
      'Creates a new article. Requires authentication. The author is automatically set to the current user.',
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Article successfully created',
    type: ArticleResponseDto,
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Unauthorized - JWT token missing or invalid',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Invalid input data',
  })
  @ApiBody({ type: CreateArticleDto })
  create(
    @Body() createArticleDto: CreateArticleDto,
    @Request() req: ExpressRequest,
  ) {
    return this.articlesService.create(
      createArticleDto,
      (req.user as ValidateUser).userId,
    );
  }

  @Get()
  @ApiOperation({
    summary: 'Get all articles',
    description:
      'Returns a paginated list of articles. Supports filtering by status, author, and search.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Articles retrieved successfully',
    type: [ArticleResponseDto],
  })
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    description: 'Page number (default: 1)',
    example: 1,
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    description: 'Items per page (default: 10)',
    example: 10,
  })
  @ApiQuery({
    name: 'status',
    required: false,
    enum: ['draft', 'published', 'archived'],
    description: 'Filter by article status',
  })
  @ApiQuery({
    name: 'author',
    required: false,
    type: String,
    description: 'Filter by author ID',
  })
  @ApiQuery({
    name: 'search',
    required: false,
    type: String,
    description: 'Search in title and content',
  })
  findAll(@Query() query: any) {
    return this.articlesService.findAll(query);
  }

  @Get('stats')
  @ApiOperation({
    summary: 'Get article statistics',
    description: 'Returns statistics about articles grouped by status.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Statistics retrieved successfully',
    schema: {
      example: {
        totalArticles: 100,
        stats: [
          { _id: 'published', count: 50, totalViews: 5000 },
          { _id: 'draft', count: 30, totalViews: 0 },
          { _id: 'archived', count: 20, totalViews: 1000 },
        ],
      },
    },
  })
  getStats() {
    return this.articlesService.getStats();
  }

  @Get('author/:authorId')
  @ApiOperation({
    summary: 'Get articles by author',
    description: 'Returns all articles written by a specific author.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Articles retrieved successfully',
    type: [ArticleResponseDto],
  })
  @ApiParam({
    name: 'authorId',
    required: true,
    type: String,
    description: 'Author ID',
    example: '507f1f77bcf86cd799439011',
  })
  findByAuthor(@Param('authorId') authorId: string) {
    return this.articlesService.findByAuthor(authorId);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get article by ID',
    description:
      'Returns a single article by its ID. This will increment the view count.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Article retrieved successfully',
    type: ArticleResponseDto,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Article not found',
  })
  @ApiParam({
    name: 'id',
    required: true,
    type: String,
    description: 'Article ID',
    example: '507f1f77bcf86cd799439012',
  })
  findOne(@Param('id') id: string) {
    return this.articlesService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'), ArticleOwnerGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Update an article',
    description:
      'Updates an existing article. Only the author can update their articles.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Article updated successfully',
    type: ArticleResponseDto,
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Unauthorized - JWT token missing or invalid',
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: 'Forbidden - You can only update your own articles',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Article not found',
  })
  @ApiParam({
    name: 'id',
    required: true,
    type: String,
    description: 'Article ID',
  })
  @ApiBody({ type: UpdateArticleDto })
  update(
    @Param('id') id: string,
    @Body() updateArticleDto: UpdateArticleDto,
    @Request() req: ExpressRequest,
  ) {
    console.log('Update article request:', updateArticleDto, req.user);
    return this.articlesService.update(
      id,
      updateArticleDto,
      (req.user as ValidateUser).userId,
    );
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'), ArticleOwnerGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Delete an article',
    description:
      'Deletes an existing article. Only the author can delete their articles.',
  })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Article deleted successfully',
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Unauthorized - JWT token missing or invalid',
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: 'Forbidden - You can only delete your own articles',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Article not found',
  })
  @ApiParam({
    name: 'id',
    required: true,
    type: String,
    description: 'Article ID',
  })
  remove(@Param('id') id: string, @Request() req: ExpressRequest) {
    return this.articlesService.remove(id, (req.user as ValidateUser).userId);
  }
}
