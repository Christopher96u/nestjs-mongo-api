import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CategoryDocument = Category & Document;

@Schema()
export class Category {
    @Prop({required: true, minlength: 3, maxlength: 30, trim: true, lowercase: true})
    name: string;

    @Prop({minlength: 5, maxlength: 50, trim: true, lowercase: true})
    description?: string;

    @Prop({default: Date.now})
    createdAt: Date;

    @Prop({default: null})
    updatedAt?: Date

    @Prop({default: null})
    deletedAt?: Date

    @Prop({default: false})
    isDeleted?: boolean

}
export const CategorySchema = SchemaFactory.createForClass(Category);

CategorySchema.method('toJSON', function () {
    const {__v, ...rest} = this.toObject();
    rest.id = rest._id;
    delete rest._id;
    return rest;
});