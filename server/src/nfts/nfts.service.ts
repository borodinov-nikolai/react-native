import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { CreateNftInput } from './dto/create-nft.input';
import { GetNftArgs } from './dto/get-nft.args';
import { UpdateNftInput } from './dto/update-nft.input';

@Injectable()
export class NftsService {
  constructor(private readonly db: DbService){}

  async create(data: CreateNftInput) {

    return await this.db.nft.create({
      data
    })
  }

  async findAll(args?: GetNftArgs) {
    const {pagination, orderBy, search} = args || {}
    const {page = 1, pageSize = 10} = pagination || {}
    const skip = (+page - 1) * +pageSize || undefined
    const take = +pageSize || undefined
    const nfts = await this.db.nft.findMany({
      ...(take && {take}),
      ...(skip && {skip}),
      ...(orderBy && {
        orderBy: {
          [orderBy?.field ?? 'id']: orderBy?.value ?? 'asc'
        }
      }),
      ...(search && {
        where: {
          originalName: {
            contains: search,
            mode: 'insensitive'
          }
        }
      }),
      include: {
        preview: true,
        products: true
      }
    })

    const count = await this.db.nft.count({
      ...(search && {
        where: {
          originalName: {
            contains: search,
            mode: 'insensitive'
          }
        }
      })
    })

    const pageCount = Math.ceil(count / +pageSize)
    return {data: nfts, meta: pagination && {pagination: {page: +page, pageSize: +pageSize, pageCount, total: count}}}
  }

  async findOne(id: number) {
      return await this.db.nft.findUnique({
        where: {
          id
        },
        include: {
          image: true,
          primaryFigureImage: true,
          preview: true,
          calendarImage: true,
          products: {
            include: {
              nftPreview: true,
              stickers: true
            }
          }
        }
      })
  }

  async update(id: number, data: UpdateNftInput) {
    const {previewImageId, primaryFigureImageId, imageId} = data
    return await this.db.nft.update({
      where: {
        id
      },
      data: {
        ...data,
        previewImageId: previewImageId ?? null,
        primaryFigureImageId: primaryFigureImageId ?? null,
        imageId: imageId ?? null
      }
    })
  }

  async remove(id: number) {
    return await this.db.nft.delete({
      where: {
        id
      }
    })
  }
}
