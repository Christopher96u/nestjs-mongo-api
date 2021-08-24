import {Model} from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category , CategoryDocument } from './category.schema';
import { CreateCategoryDto } from './dto/create.category.dto';

@Injectable()
export class CategoryService {
    constructor(@InjectModel(Category.name) private categoryModel: Model<CategoryDocument>){}

    async create(createCategoryDto : CreateCategoryDto): Promise<Category> {
        const createdCategory = new this.categoryModel(createCategoryDto);
        return createdCategory.save();
    }

    async findAll(): Promise<Category[]> {
        return this.categoryModel.find().exec();
    }
}
