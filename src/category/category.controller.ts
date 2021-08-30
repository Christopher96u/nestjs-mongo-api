import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UpdateCategoryDto } from './dto/update.category.dto';
import { CreateCategoryDto } from './dto/create.category.dto';
import { ParseObjectIdPipe } from './../common/pipes/is.object.id';
import { CategoryService } from './category.service';
import { Category } from './category.schema';

@Controller('categories')
export class CategoryController {
    constructor(private readonly categoryService : CategoryService){}

    @Get()
        async findAll() : Promise <Category[]> {
            return this.categoryService.findAll();
        }

    @Get(':id') 
        async findOne(@Param('id', ParseObjectIdPipe) id: string): Promise <Category>{
            return this.categoryService.findOne(id);
        }
        
    @Post()
        async create(@Body() createCategoryDto : CreateCategoryDto) : Promise <Category> {
            return this.categoryService.create(createCategoryDto);
        
        }

    @Put(':id')
        async update(@Param('id', ParseObjectIdPipe) id: string,  @Body() updateCategoryDto: UpdateCategoryDto){
            return this.categoryService.update(id, updateCategoryDto);
        }

    @Delete(':id')
        async delete(@Param('id', ParseObjectIdPipe) id: string) {
            return this.categoryService.delete(id);
        }
}
