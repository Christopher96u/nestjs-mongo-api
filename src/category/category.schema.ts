import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';
export type CategoryDocument = Category & Document;

@Schema({versionKey:false, timestamps: true})
export class Category {
   
    @Prop({required: true, minlength: 3, maxlength: 30, trim: true, lowercase: true})
    name: string;

    @Prop({minlength: 5, maxlength: 50, trim: true, lowercase: true})
    description?: string;

    @Prop({default: true})
    isActive?: boolean;

    @Prop({default: false})
    isDeleted?: boolean

}
export const CategorySchema = SchemaFactory.createForClass(Category);
