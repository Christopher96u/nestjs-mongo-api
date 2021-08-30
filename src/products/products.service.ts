import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CategoryService } from 'src/category/category.service';
import { CreateProductDto } from './dto/create.product.dto';
import { Product, ProductDocument } from './product.schema';

@Injectable()
export class ProductsService {
    constructor(@InjectModel(Product.name)
        private readonly  productModel: Model<ProductDocument>,
        private readonly categoryService: CategoryService
    ){}
    async create(createProductDto: CreateProductDto): Promise<Product> {
        // Ya esta validado, solo se puede crear un producto si existe la categoria 
        await this.categoryService.findOne(createProductDto.category)
        const createdProduct = new this.productModel(createProductDto);
        return createdProduct.save().then(product => product.populate('category').execPopulate());
    }
    async findAll(): Promise<Product[]> {
        // listar solo los q no estan borrados
        return   this.productModel.find().populate("category").exec(); 
    }
    
    async findOne(id : string): Promise<Product>{
        // falta
        //
        const product =  await this.productModel.findById(id).exec();
        if (!product) {
            throw new NotFoundException();
        }
        console.log(product);
    return product;
    }

    // falta el UPDATE y DELETE
    /* 
        * Solo se puede actualizar si NO ESTA BORRADO y si la categoria esta Activa
        * Solo se puede borrar si no esta borrado
    */
}
export default ProductsService;
