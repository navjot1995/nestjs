import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Article extends Document {
  @Prop({
    type: String,
    required: true,
  })
  title: string;

  @Prop({
    type: String,
    required: true,
  })
  content: string;

  @Prop({ type: String, default: 'draft' }) // draft, published, archived
  status: string;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  author: Types.ObjectId;

  @Prop({ type: Number, default: 0 })
  views: number;

  @Prop([String])
  tags: string[];

  @Prop({ type: String })
  featuredImage: string;

  @Prop({ type: Date })
  publishedAt: Date;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);

// Add indexes for better query performance
ArticleSchema.index({ title: 'text', content: 'text' }); // For text search
ArticleSchema.index({ author: 1 });
ArticleSchema.index({ status: 1, publishedAt: -1 });
