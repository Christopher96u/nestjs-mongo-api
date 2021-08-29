import { Mongoose } from 'mongoose';
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document, ObjectId, Types, Schema as MongooseSchema } from 'mongoose';
import { Transform, Type } from 'class-transformer';
import { Category, CategorySchema } from 'src/category/category.schema';
import mongooseAutoPopulate from 'mongoose-autopopulate';
export type ProductDocument = Product & Document;

 @Schema({versionKey: false, timestamps: true})
 export class Product {
    
    @Prop()
    name: string;

    @Prop()
    description?: string;

    @Prop({type: MongooseSchema.Types.ObjectId, ref: 'Category' })
    category:  Types.ObjectId;
 }
 export const ProductSchema = SchemaFactory.createForClass(Product);