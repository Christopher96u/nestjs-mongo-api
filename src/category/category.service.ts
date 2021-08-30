import {Model} from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category , CategoryDocument } from './category.schema';
import { CreateCategoryDto } from './dto/create.category.dto';
import { UpdateCategoryDto } from './dto/update.category.dto';

@Injectable()
export class CategoryService {
    constructor(@InjectModel(Category.name) private readonly categoryModel: Model<CategoryDocument>){}

    async create(createCategoryDto : CreateCategoryDto): Promise<Category> {
        const createdCategory = new this.categoryModel(createCategoryDto);
        return createdCategory.save();
    }

    async findAll(): Promise<Category[]> {
        return  this.categoryModel.find({isDeleted: false});
    }
    
    async findOne(id: string): Promise<Category>{
        const category = await this.categoryModel.findById(id).exec();
        if (!category || category.isDeleted === true) {
            throw new NotFoundException();
        }
        return category;
    }

    async update(id: string, updateCategoryDto : UpdateCategoryDto): Promise<Category>{
        await this.findOne(id);
        const updatedCategory = await this.categoryModel.findByIdAndUpdate(id, updateCategoryDto, {new: true}).exec();
        if (!updatedCategory) {
            throw new NotFoundException();
        }
        return updatedCategory;
    }

    async delete(id: string): Promise<Category> {
        await this.findOne(id);
        return this.categoryModel.findByIdAndUpdate(id, {isDeleted: true},{new: true}).exec();
    }

}
