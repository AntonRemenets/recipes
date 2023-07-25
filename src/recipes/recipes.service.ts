import { Injectable } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Recipe } from './schemas/recipe.schema';
import { Model } from 'mongoose';

@Injectable()
export class RecipesService {

  constructor(@InjectModel(Recipe.name) private readonly recipeModel: Model<Recipe>) { }

  async createRecipe(newRecipe: CreateRecipeDto): Promise<Recipe> {
    const createdRecipe = await this.recipeModel.create(newRecipe)
    return createdRecipe
  }

  async findAll(): Promise<Recipe[]> {
    return await this.recipeModel.find().exec();
  }

}
