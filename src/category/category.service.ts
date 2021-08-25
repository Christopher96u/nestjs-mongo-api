import {Model} from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category , CategoryDocument } from './category.schema';
import { CreateCategoryDto } from './dto/create.category.dto';

// Los servicios se comunican con la BD 
@Injectable()
export class CategoryService {
    constructor(@InjectModel(Category.name) private readonly categoryModel: Model<CategoryDocument>){}

    async create(createCategoryDto : CreateCategoryDto): Promise<Category> {
        const createdCategory = new this.categoryModel(createCategoryDto);
        return createdCategory.save();
    }

    async findAll(): Promise<Category[]> {
        return  this.categoryModel.find().exec();
    }
    async findOne(id: string): Promise<Category>{
        return this.categoryModel.findById(id).exec();
    }
    async update(id: string, createCategoryDto : CreateCategoryDto): Promise<Category>{
        return this.categoryModel.findByIdAndUpdate(id, createCategoryDto, {new: true}).exec();
    }
    async delete(id: string): Promise<Category> {
        return this.categoryModel.findByIdAndUpdate(id, {isDeleted: true}).exec();
    }

}
