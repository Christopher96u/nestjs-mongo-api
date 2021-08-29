import { Body, Controller, Post, Get, Param, UseInterceptors } from '@nestjs/common';
import { CreateProductDto } from './dto/create.product.dto';
import { ProductsService } from './products.service';
import {Product} from './interfaces/product.interface';
import {Product as ProductModel} from './product.schema'
import MongooseClassSerializerInterceptor from 'src/utils/mongooseClassSerializer.interceptor';

@Controller('products')
@UseInterceptors(MongooseClassSerializerInterceptor(ProductModel))
export class ProductsController {
    constructor(private readonly productService: ProductsService){}
    
    @Get()
        async findAll() : Promise <Product[]> {
            return this.productService.findAll();
        }


    @Post()
    async create( @Body() createProductDto ){
        return this.productService.create(createProductDto);
    }
    @Get(':id')
    async findOne(@Param('id') id: string): Promise <Product>{
        return this.productService.findOne(id);
    }

}
