import { Injectable } from '@nestjs/common';
import { CreateSeriesInput } from './dto/create-series.input';
import { UpdateSeriesInput } from './dto/update-series.input';
import { DbService } from 'src/db/db.service';
import { GetSeriesArgs } from './dto/get-series.args';

@Injectable()
export class SeriesService {
  constructor(private readonly db: DbService){}

  async create(data: CreateSeriesInput) {

    return await this.db.series.create({
      data
    })
  }

  async findAll(args?: GetSeriesArgs) {
    const {pagination, orderBy, search} = args || {}
    const {page = 1, pageSize = 10} = pagination || {}
    const skip = (+page - 1) * +pageSize || undefined
    const take = +pageSize || undefined
    const series = await this.db.series.findMany({
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

    const count = await this.db.series.count({
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
    return {data: series, meta: pagination && {pagination: {page: +page, pageSize: +pageSize, pageCount, total: count}}}
  }

  async findOne(id: number) {
      return await this.db.series.findUnique({
        where: {
          id
        },
        include: {
          image: true,
          primaryFigureImage: true,
          preview: true,
          products: {
            include: {
              seriesPreview: true,
              stickers: true
            }
          }
        }
      })
  }

  async update(id: number, data: UpdateSeriesInput) {
    const {previewImageId, primaryFigureImageId, imageId} = data
    return await this.db.series.update({
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
    return await this.db.series.delete({
      where: {
        id
      }
    })
  }
}
