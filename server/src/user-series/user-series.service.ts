import { Injectable } from '@nestjs/common';
import { CreateUserSeryInput } from './dto/create-user-sery.input';
import { UpdateUserSeryInput } from './dto/update-user-sery.input';
import { DbService } from 'src/db/db.service';


@Injectable()
export class UserSeriesService {
  constructor(private readonly db: DbService){}

  async create(input: CreateUserSeryInput) {
    const {checkedItems, ...data} = input
    return await this.db.userSeries.create({
      data: {
        ...data,
        checkedItems: {
          connect: checkedItems?.map((id)=> ({id}))
        }
      }
    })
  }

   async findAll() {
    return await this.db.userSeries.findMany()
  }

  findOne(id: number) {
    return `This action returns a #${id} userSery`;
  }

  async update(id: number, input: UpdateUserSeryInput) {
    const {checkedItems, ...data} = input
    return await this.db.userSeries.update({
      where: {
        id
      },
      data: {
        ...data,
        ...(checkedItems && {
          checkedItems: {
            set: [],
            connect: checkedItems.map((id)=> ({id}))
          }
        })
      }
    })
  }

  async remove(id: number) {
    return await this.db.userSeries.delete({
      where: {
        id
      }
    })
  }
}
