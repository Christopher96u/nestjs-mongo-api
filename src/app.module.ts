import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import {ConfigModule} from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { ProductsModule } from './products/products.module';
const ENV = process.env.NODE_ENV;
@Module({
  imports: [
    ConfigModule.forRoot({
    isGlobal: true,
    expandVariables: true,
    envFilePath: !ENV ? '.development.env' : `.${ENV}.env`
  }),
    MongooseModule.forRoot(process.env.DATABASE_URI, { useFindAndModify: false }),
    CategoryModule,
    ProductsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
