import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document, Schema as MongooseSchema } from 'mongoose';

export type ProductDocument = Product & Document;
 @Schema({versionKey: false, timestamps: true})
 export class Product {
    
    @Prop()
    name: string;

    @Prop()
    description?: string;

    @Prop({default: true})
    isActive?: boolean;

    @Prop({default: false})
    isDeleted?: boolean

    @Prop({type: MongooseSchema.Types.ObjectId, ref: 'Category' })
    category:   MongooseSchema.Types.ObjectId
 }
 export const ProductSchema = SchemaFactory.createForClass(Product);