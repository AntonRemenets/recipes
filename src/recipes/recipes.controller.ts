import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) { }

  @Get()
  async getAll() {
    return this.recipesService.findAll();
  }

  @Post('create')
  async create(@Body() createRecipeDto: CreateRecipeDto) {
    await this.recipesService.create(createRecipeDto)
  }
}
