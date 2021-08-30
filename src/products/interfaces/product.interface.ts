import { ObjectId } from "mongoose";
import { Category } from "src/category/interfaces/category.interface";

export interface Product {
    
    name: string;
    description?: string;
    category: ObjectId | Category;
}