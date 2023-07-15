import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose'

export type RecipeDocument = HydratedDocument<Recipe>

@Schema()
export class Recipe {

    @Prop({ required: true })
    title: string

    @Prop({ required: true })
    description: string

    @Prop({ required: false })
    image: string
}

export const RecipeSchema = SchemaFactory.createForClass(Recipe)