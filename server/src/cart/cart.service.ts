import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { GetCartItemsArgs } from './dto/get-cartitems.args';


@Injectable()
export class CartService {
  constructor(private readonly db: DbService){}
  async findCartItems(args: GetCartItemsArgs) {
    return await this.db.product.findMany({
      where: {
        id: {in: args.ids}
      },
      include: {
        catalogPreview: true,
        nftPreview: true,
        seriesPreview: true,
        series: true
      }
    })
  }


}
