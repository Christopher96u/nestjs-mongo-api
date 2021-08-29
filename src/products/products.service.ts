import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId, Types } from 'mongoose';
import { CreateProductDto } from './dto/create.product.dto';
import { Product, ProductDocument } from './product.schema';


@Injectable()
export class ProductsService {
    constructor(@InjectModel(Product.name) private  productModel: Model<ProductDocument>){}
    async create(createProductDto): Promise<Product> {
        console.log("createProductDto", createProductDto);
    
        const createdProduct = new this.productModel(createProductDto);
        return createdProduct.save();
    }
    async findAll(): Promise<Product[]> {
        return  this.productModel.find().exec();
    }
    
    async findOne(id : string): Promise<Product>{
        const product =  await this.productModel.findById(id).populate('categories').exec();
        if (!product) {
            throw new NotFoundException();
        }
        console.log(product);
    return product;
    }
}
export default ProductsService;
