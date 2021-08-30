import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import {Product} from './interfaces/product.interface';
import { CreateProductDto } from './dto/create.product.dto';
@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductsService){}
    
    @Get()
        async findAll() : Promise <Product[]> {
            return this.productService.findAll();
        }


    @Post()
    async create( @Body() createProductDto : CreateProductDto ){
        return this.productService.create(createProductDto);
    }
    @Get(':id')
    async findOne(@Param('id') id: string): Promise <Product>{
        return this.productService.findOne(id);
    }

}
