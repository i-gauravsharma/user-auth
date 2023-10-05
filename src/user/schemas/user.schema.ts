import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  strict: false,
  timestamps: true,
})
export class User {
  @Prop()
  fullName: string;

  @Prop()
  email: string;

  @Prop()
  mobileNumebr: number;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
