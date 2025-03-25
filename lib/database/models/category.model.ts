import { Document, model } from "mongoose";
import { models } from "mongoose";
import { Schema } from "mongoose";

export interface ICategory extends Document{
    _id: string;
    name: string;
}

const CategorySchema = new Schema({
    name: {type: String, required: true , unique: true},
})

const Category = models.Category || model('Category',CategorySchema);

export default Category;