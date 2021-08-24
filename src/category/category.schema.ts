import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CategoryDocument = Category & Document;

@Schema()
export class Category {
    @Prop()
    name: String;
}
export const CategorySchema = SchemaFactory.createForClass(Category);

CategorySchema.method('toJSON', function () {
    const {__v, ...rest} = this.toObject();
    rest.id = rest._id;
    delete rest._id;
    return rest;
});