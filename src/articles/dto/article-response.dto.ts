import { ApiProperty } from '@nestjs/swagger';

class ArticleAuthorDto {
  @ApiProperty({
    example: '507f1f77bcf86cd799439011',
    description: 'Author ID',
  })
  _id: string;

  @ApiProperty({
    example: 'user@example.com',
    description: 'Author email',
  })
  email: string;

  @ApiProperty({
    example: 'John Doe',
    description: 'Author name',
  })
  name: string;
}

export class ArticleResponseDto {
  @ApiProperty({
    example: '507f1f77bcf86cd799439012',
    description: 'Article ID',
  })
  _id: string;

  @ApiProperty({
    example: 'My First Article',
    description: 'Article title',
  })
  title: string;

  @ApiProperty({
    example: 'This is the content...',
    description: 'Article content',
  })
  content: string;

  @ApiProperty({
    enum: ['draft', 'published', 'archived'],
    example: 'published',
    description: 'Article status',
  })
  status: string;

  @ApiProperty({
    type: ArticleAuthorDto,
    description: 'Article author',
  })
  author: ArticleAuthorDto;

  @ApiProperty({
    example: 42,
    description: 'Number of views',
  })
  views: number;

  @ApiProperty({
    example: ['nestjs', 'mongodb'],
    description: 'Article tags',
    type: [String],
  })
  tags: string[];

  @ApiProperty({
    example: 'https://example.com/image.jpg',
    description: 'Featured image URL',
    required: false,
  })
  featuredImage?: string;

  @ApiProperty({
    example: '2024-01-01T00:00:00.000Z',
    description: 'Publication date',
    required: false,
  })
  publishedAt?: Date;

  @ApiProperty({
    example: '2024-01-01T00:00:00.000Z',
    description: 'Creation date',
  })
  createdAt: Date;

  @ApiProperty({
    example: '2024-01-01T00:00:00.000Z',
    description: 'Last update date',
  })
  updatedAt: Date;
}
