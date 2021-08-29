
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create.category.dto';
import { Category } from './interfaces/category.interface';

@Controller('categories')
export class CategoryController {
    constructor(private readonly categoryService : CategoryService){}

    @Get()
        async findAll() : Promise <Category[]> {
            return this.categoryService.findAll();
        }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise <Category>{
        console.log("id : ", id);
        return await this.categoryService.findOne(id);
    }
        
        
    @Post()
    async create(@Body() createCategoryDto : CreateCategoryDto){
        return this.categoryService.create(createCategoryDto);
    }

    @Put(':id')
    async update(@Param('id') id: string,  @Body() createCategoryDto: CreateCategoryDto){
        return this.categoryService.update(id, createCategoryDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.categoryService.delete(id);
    }


    
}
