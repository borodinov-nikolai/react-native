import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { ProductsResponse } from './dto/products.response';
import { GetProductsArgs } from './dto/get-products.args';
import { UseGuards } from '@nestjs/common';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';

@Resolver(() => Product)
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @UseGuards(RolesGuard)
  @Roles(["SUPER_ADMIN", "ADMIN"])
  @Mutation(() => Product)
  createProduct(@Args('createProductInput') createProductInput: CreateProductInput) {
    return this.productsService.create(createProductInput);
  }

  @Query(() => ProductsResponse, { name: 'products' })
  findAll(@Args('args', {type: ()=> GetProductsArgs, nullable: true}) args: GetProductsArgs) {
    return this.productsService.findAll(args);
  } 

  @Query(() => Product, { name: 'product' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.productsService.findOne(id);
  }

  @UseGuards(RolesGuard)
  @Roles(["SUPER_ADMIN", "ADMIN"])
  @Mutation(() => Product)
  updateProduct(@Args('updateProductInput') updateProductInput: UpdateProductInput) {
    return this.productsService.update(updateProductInput.id, updateProductInput);
  }

  @UseGuards(RolesGuard)
  @Roles(["SUPER_ADMIN", "ADMIN"])
  @Mutation(() => Product)
  removeProduct(@Args('id', { type: () => Int }) id: number) {
    return this.productsService.remove(id);
  }
}
