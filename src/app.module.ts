import { Module } from '@nestjs/common';
import { RecipesModule } from './recipes/recipes.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    RecipesModule,
    MongooseModule.forRoot(process.env.MONGO_DB)
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
