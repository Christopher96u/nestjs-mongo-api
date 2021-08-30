import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type CategoryDocument = Category & Document;

@Schema({versionKey:false, timestamps: true})
export class Category {
   
    @Prop({required: true, trim: true, lowercase: true})
    name: string;

    @Prop({trim: true, lowercase: true})
    description?: string;

    @Prop({default: true})
    isActive?: boolean;

    @Prop({default: false})
    isDeleted?: boolean

}
export const CategorySchema = SchemaFactory.createForClass(Category);
