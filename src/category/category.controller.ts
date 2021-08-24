
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create.category.dto';
import { Category } from './interfaces/category.interface';

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService : CategoryService){}

    @Post()
    async create(@Body() createCategoryDto : CreateCategoryDto){
        this.categoryService.create(createCategoryDto);
    }


    @Get()
    async findAll() : Promise <Category[]> {
        return this.categoryService.findAll();
    }
}
