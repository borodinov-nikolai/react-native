import { Injectable } from '@nestjs/common';
import { CreateUserNftInput } from './dto/create-user-nft.input';
import { UpdateUserNftInput } from './dto/update-user-nft.input';
import { DbService } from 'src/db/db.service';

@Injectable()
export class UserNftService {
  constructor(private readonly db: DbService) {}

  async create(input: CreateUserNftInput) {
    const {checkedItems, ...data} = input
    return await this.db.userNft.create({
      data: {
        ...data,
        checkedItems: {
          connect: checkedItems?.map((id)=> ({id}))
        }
      }
    })
  }

  findAll() {
    return `This action returns all userNft`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userNft`;
  }

 async update(id: number, input: UpdateUserNftInput) {
  const {checkedItems, ...data} = input
    return await this.db.userNft.update({
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
    return await this.db.userNft.delete({
      where: {
        id
      }
    })
  }
}
