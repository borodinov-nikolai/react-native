import { Injectable } from '@nestjs/common';
import { CreateImageInput } from './dto/create-image.input';
import { UpdateImageInput } from './dto/update-image.input';
import { DbService } from 'src/db/db.service';
import { GetImagesArgs } from './dto/get-images.args';
import { UploadService } from 'src/upload/upload.service';


@Injectable()
export class ImagesService {
  constructor(private readonly db: DbService, private readonly uploadService: UploadService){}

  create(createImageInput: CreateImageInput) {
    return 'This action adds a new image';
  }

  async findAll(args: GetImagesArgs) {
    const {pagination, orderBy, search} = args || {}
    const {page = 1, pageSize = 10} = pagination || {}
    const skip = (+page - 1) * +pageSize || undefined
    const take = +pageSize || undefined
    const images =  await this.db.image.findMany({
      skip,
      take,
      orderBy: {
        [orderBy?.field ?? 'id']: orderBy?.value ?? 'asc'
      },
      ...(search && {
        where: {
          name: {
            contains: search,
            mode: 'insensitive'
          }
        }
      })
    })

    const count = await this.db.image.count({
      ...(search && {
        where: {
          name: {
            contains: search,
            mode: 'insensitive'
          }
        }
      })
    })

    const pageCount = Math.ceil(count / +pageSize)
    return {data: images, meta: pagination && {pagination: {page: +page, pageSize: +pageSize, pageCount, total: count}}}
  }

  findOne(id: number) {
    return `This action returns a #${id} image`;
  }

  update(id: number, updateImageInput: UpdateImageInput) {
    return `This action updates a #${id} image`;
  }

  async remove(id: number) {
    const image = await this.db.image.delete({
      where: {
        id
      }
    })

    if(image) {
     return await this.uploadService.deleteFile(image.name, 'images')
    }
  }
}
