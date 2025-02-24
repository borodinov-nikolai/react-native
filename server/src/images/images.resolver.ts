import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ImagesService } from './images.service';
import { Image } from './entities/image.entity';
import { CreateImageInput } from './dto/create-image.input';
import { UpdateImageInput } from './dto/update-image.input';
import { ImagesResponse } from './dto/images.response';
import { GetImagesArgs } from './dto/get-images.args';

@Resolver(() => Image)
export class ImagesResolver {
  constructor(private readonly imagesService: ImagesService) {}

  @Mutation(() => Image)
  createImage(@Args('createImageInput') createImageInput: CreateImageInput) {
    return this.imagesService.create(createImageInput);
  }

  @Query(() => ImagesResponse, { name: 'images' })
  findAll(@Args('args', {type: ()=>  GetImagesArgs, nullable: true}) args: GetImagesArgs) {
    return this.imagesService.findAll(args);
  }

  @Query(() => Image, { name: 'image' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.imagesService.findOne(id);
  }

  @Mutation(() => Image)
  updateImage(@Args('updateImageInput') updateImageInput: UpdateImageInput) {
    return this.imagesService.update(updateImageInput.id, updateImageInput);
  }

  @Mutation(() => Boolean)
  removeImage(@Args('id', { type: () => Int }) id: number) {
    return this.imagesService.remove(id);
  }
}
