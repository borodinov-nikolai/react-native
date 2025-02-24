import { Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { DbService } from 'src/db/db.service';
import { GetProductsArgs } from './dto/get-products.args';

@Injectable()
export class ProductsService {
  constructor(private readonly db: DbService){}

  async create(input: CreateProductInput) {
    const {images, stickers, ...data} = input
     return await this.db.product.create({
      data: {
        ...data,
        images: {
          connect: images?.map((id)=> ({id}))
        },
        stickers: {
          connect: stickers?.map((id)=> ({id}))
        }
      
      }
     })
  }

  async findAll(args: GetProductsArgs) {
    const {pagination, orderBy, search, category, isAvailable, whereToShow} = args || {}
    const {page = 1, pageSize = 10} = pagination || {}
    const skip = (+page - 1) * +pageSize || undefined
    const take = +pageSize || undefined

    const where: any = {};

    if (search) {
      where.name = { contains: search, mode: 'insensitive' };
    }
  
    if (category) {
      where.category = category;
    }
  
    if (isAvailable !== undefined) {
      where.stock = {
        ...(isAvailable ? { gt: 0 } : { lt: 1 }),
      };
    }

    if (whereToShow) {
      where.whereToShow = {has: whereToShow}
    }

    where.type = 'Figure'
  
    const products = await this.db.product.findMany({
      take,
      skip,
      orderBy: {
        [orderBy?.field ?? 'id']: orderBy?.value ?? 'asc',
      },
      where,
      include: {
        images: true,
        catalogPreview: true,
        series: true
      },
    });
  
 
    const count = await this.db.product.count({ where });
    const pageCount = Math.ceil(count / +pageSize)

    return {data: products, meta: pagination && {pagination: {page: +page, pageSize: +pageSize, pageCount, total: count}}}
  }

  async findOne(id: number) {
    return await this.db.product.findUnique({
      where: {
        id
      },
      include: {
        images: true,
        stickers: true,
        catalogPreview: true,
        seriesPreview: true,
        nftPreview: true,
        series: true,
        nft: true
      }
    })
  }

  async update(id: number, input: UpdateProductInput) {
    const {images, stickers, catalogPreviewId, seriesPreviewId, nftPreviewId, ...data} = input
    const seriesId = data
    return await this.db.product.update({
        where: {
          id
        },
        data: {
          ...data,
          ...(images && {images: {
            set: [],
            connect: images.map((id)=> ({id}))
          }}),
          ...(stickers && {stickers: {
            set: [],
            connect: stickers.map((id)=> ({id}))
          }}),
          ...(seriesId && {
            userSeries: {
              set: []
            }
          }),
          catalogPreviewId: catalogPreviewId ?? null,
          seriesPreviewId: seriesPreviewId ?? null,
          nftPreviewId: nftPreviewId ?? null
        }
    })
  }

  async remove(id: number) {
    return await this.db.product.delete({
      where: {
        id
      }
    })
  }
}
