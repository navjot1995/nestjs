import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({
    type: String, // ✅ Explicit type
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  })
  email: string;

  @Prop({
    type: String, // ✅ Explicit type
    required: true,
  })
  password: string;

  @Prop({
    type: String, // ✅ Explicit type
  })
  name: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
