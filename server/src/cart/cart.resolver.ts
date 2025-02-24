import { Resolver, Query, Args, } from '@nestjs/graphql';
import { CartService } from './cart.service';
import { Cart } from './entities/cart.entity';
import { GetCartItemsArgs } from './dto/get-cartitems.args';
import { Product } from 'src/products/entities/product.entity';



@Resolver(() => Cart)
export class CartResolver {
  constructor(private readonly cartService: CartService) {}

  @Query(() => [Product], {name: 'cartItems'})
  findCartItems(@Args('args') args: GetCartItemsArgs) {
    return this.cartService.findCartItems(args);
  }

}
