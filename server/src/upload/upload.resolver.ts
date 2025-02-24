import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UploadService } from './upload.service';
import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js';
import * as Upload from 'graphql-upload/Upload.js'
import { UseGuards } from '@nestjs/common';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';


@Resolver()
export class UploadResolver {
  constructor(private readonly uploadService: UploadService) {}

    @UseGuards(RolesGuard)
    @Roles(["SUPER_ADMIN", "ADMIN"])
  @Mutation(()=> Boolean) 
  async uploadFile(@Args({ name: 'file', type: () => [GraphQLUpload] }) file: Upload[]) {
    try {
      await Promise.all(
        file.map(async (item) => {
          const { createReadStream, filename, mimetype } = await item;
          
          if (!createReadStream || !filename || !mimetype) {
            throw new Error('Неверный формат загружаемого файла.');
          }
        
          if (mimetype?.startsWith('image')) {
            await this.uploadService.createImage({createReadStream, filename, mimetype});
          }

          if(mimetype === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
            await this.uploadService.xlsxService({createReadStream, filename, mimetype})
          }
    
        }),

      );
  
      return true;
    } catch (error) {
      console.error('Ошибка загрузки файлов:', error);
      return false;
    }
  }
   
  
}