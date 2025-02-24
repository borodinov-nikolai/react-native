import { Injectable } from '@nestjs/common';
import { CreateNftPageInput } from './dto/create-nft-page.input';
import { UpdateNftPageInput } from './dto/update-nft-page.input';
import { DbService } from 'src/db/db.service';

@Injectable()
export class NftPageService {
  constructor (private readonly db: DbService){}
 async create(input: CreateNftPageInput) {
  const {standartSetDescription,
     standartSetStock, 
     standartSetPrice,
    premiumSetDescription,
    premiumSetStock,
    premiumSetPrice,
    standartSetCatalogPreviewId,
    premiumSetCatalogPreviewId,
    ...data
    } = input

    const standartSet = await this.db.product.create({
      data: {
        type: 'CardsSet',
        name: 'Стандартный набор',
        number: 1,
        description: standartSetDescription,
        price: standartSetPrice,
        stock: standartSetStock,
        catalogPreviewId: standartSetCatalogPreviewId
      }
    })
    const premiumSet = await this.db.product.create({
      data: {
        type: 'CardsSet',
        name: 'Премиум набор',
        number: 1,
        description: premiumSetDescription,
        price: premiumSetPrice,
        stock: premiumSetStock,
        catalogPreviewId: premiumSetCatalogPreviewId
      }
    })

    return await this.db.nftPage.create({
      data: {
        ...data,
        standartSetId: standartSet?.id,
        premiumSetId: premiumSet?.id
      }
    })
  }

  findAll() {
    return `This action returns all nftPage`;
  }

  async findOne() {
    return await this.db.nftPage.findUnique({
      where: {
        id: 1
      },
      include: {
        newReleasePreview: true,
        
        standartSet: {
          include: {
            catalogPreview: true
          }
        },
        premiumSet: {
          include: {
            catalogPreview: true
          }
        }
      }
    })
  }

  async update(input: UpdateNftPageInput) {
    const {
      id: inputId,
      newReleasePreviewId,
      standartSetId,
      standartSetDescription,
      standartSetPrice,
      standartSetStock,
      premiumSetId,
      premiumSetDescription,
      premiumSetPrice,
      premiumSetStock,
      standartSetCatalogPreviewId,
      premiumSetCatalogPreviewId,
      ...data
    } = input
    
  return await this.db.nftPage.update({
    where: {
      id: 1
    },
    data: {
      standartSet: {
        update: {
          where: {
            id: standartSetId
          },
          data: {
            description: standartSetDescription,
            price: standartSetPrice,
            stock: standartSetStock,
            catalogPreviewId: standartSetCatalogPreviewId ?? null
          }
        }
      },
      premiumSet: {
        update: {
          where: {
            id: premiumSetId
          },
          data: {
            description: premiumSetDescription,
            price: premiumSetPrice,
            stock: premiumSetStock,
            catalogPreviewId: premiumSetCatalogPreviewId ?? null
          }
        }
      },
      ...data,
      newReleasePreview: newReleasePreviewId ? {connect: {id: newReleasePreviewId}} : {disconnect: true}
    }
  })
  }

  remove(id: number) {
    return `This action removes a #${id} nftPage`;
  }
}
