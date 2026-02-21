import { Types } from 'mongoose';

export interface IArticle {
  _id?: Types.ObjectId;
  title: string;
  content: string;
  status: 'draft' | 'published' | 'archived';
  author: Types.ObjectId;
  views: number;
  tags: string[];
  featuredImage?: string;
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}
