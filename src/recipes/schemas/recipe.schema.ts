import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose'

export type RecipeDocument = HydratedDocument<Recipe>

@Schema()
export class Recipe {

    @ApiProperty()
    @Prop({ required: true })
    title: string

    @ApiProperty()
    @Prop({ required: true })
    description: string

    @ApiProperty({ required: false })
    @Prop()
    image: string
}

export const RecipeSchema = SchemaFactory.createForClass(Recipe)