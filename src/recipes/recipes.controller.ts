import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Recipe } from './schemas/recipe.schema';
//import { UpdateRecipeDto } from './dto/update-recipe.dto';

@ApiTags('recipes CRUD')
@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) { }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Возвращает список всех рецептов',
    type: [Recipe]
  })
  async getAll() {
    return this.recipesService.findAll();
  }

  @Post()
  @ApiBody({ type: CreateRecipeDto })
  @ApiResponse({
    status: 201,
    description: 'Создание рецепта',
    type: Recipe
  })
  async createRecipe(@Body() newRecipe: CreateRecipeDto) {
    await this.recipesService.createRecipe(newRecipe)
    return newRecipe
  }
}
