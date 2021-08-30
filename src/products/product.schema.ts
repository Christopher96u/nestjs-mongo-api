import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document, ObjectId, Types, Schema as MongooseSchema, SchemaTypes } from 'mongoose';
export type ProductDocument = Product & Document;

 @Schema({versionKey: false, timestamps: true})
 export class Product {
    
    @Prop()
    name: string;

    @Prop()
    description?: string;

    @Prop({type: MongooseSchema.Types.ObjectId, ref: 'Category' })
    category:   MongooseSchema.Types.ObjectId
 }
 export const ProductSchema = SchemaFactory.createForClass(Product);