import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsArray,
  IsEnum,
  IsUrl,
  MinLength,
} from 'class-validator';

export enum ArticleStatus {
  DRAFT = 'draft',
  PUBLISHED = 'published',
  ARCHIVED = 'archived',
}

export class CreateArticleDto {
  @ApiProperty({
    example: 'My First Article',
    description: 'Article title',
    minLength: 3,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  title: string;

  @ApiProperty({
    example: 'This is the content of my article...',
    description: 'Article content',
    minLength: 10,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  content: string;

  @ApiPropertyOptional({
    enum: ArticleStatus,
    example: ArticleStatus.DRAFT,
    description: 'Article status',
    default: ArticleStatus.DRAFT,
  })
  @IsEnum(ArticleStatus)
  @IsOptional()
  status?: ArticleStatus;

  @ApiPropertyOptional({
    example: ['nestjs', 'mongodb', 'tutorial'],
    description: 'Article tags',
    type: [String],
  })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  tags?: string[];

  @ApiPropertyOptional({
    example: 'https://example.com/image.jpg',
    description: 'Featured image URL',
  })
  @IsUrl()
  @IsOptional()
  featuredImage?: string;
}
