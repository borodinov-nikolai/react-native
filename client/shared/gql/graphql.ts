/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  jwt: Scalars['String']['output'];
};

export type CreateImageInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['input'];
};

export type CreateNftInput = {
  calendarImageId?: InputMaybe<Scalars['Int']['input']>;
  event1_date?: InputMaybe<Scalars['DateTime']['input']>;
  event1_desc?: InputMaybe<Scalars['String']['input']>;
  event2_date?: InputMaybe<Scalars['DateTime']['input']>;
  event2_desc?: InputMaybe<Scalars['String']['input']>;
  event3_date?: InputMaybe<Scalars['DateTime']['input']>;
  event3_desc?: InputMaybe<Scalars['String']['input']>;
  event4_completed?: InputMaybe<Scalars['Boolean']['input']>;
  event4_desc?: InputMaybe<Scalars['String']['input']>;
  event4_quarter?: InputMaybe<Scalars['Float']['input']>;
  imageId?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  originalName: Scalars['String']['input'];
  previewImageId?: InputMaybe<Scalars['Int']['input']>;
  primaryFigureImageId?: InputMaybe<Scalars['Int']['input']>;
  primaryFigureName?: InputMaybe<Scalars['String']['input']>;
  primaryFigureNumber?: InputMaybe<Scalars['Float']['input']>;
};

export type CreateNftPageInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  newReleasePreviewId?: InputMaybe<Scalars['Float']['input']>;
  premiumSetCatalogPreviewId?: InputMaybe<Scalars['Float']['input']>;
  premiumSetDescription?: InputMaybe<Scalars['String']['input']>;
  premiumSetId?: InputMaybe<Scalars['Float']['input']>;
  premiumSetPrice?: InputMaybe<Scalars['Float']['input']>;
  premiumSetQuantity?: InputMaybe<Scalars['Float']['input']>;
  premiumSetStock?: InputMaybe<Scalars['Float']['input']>;
  standartSetCatalogPreviewId?: InputMaybe<Scalars['Float']['input']>;
  standartSetDescription?: InputMaybe<Scalars['String']['input']>;
  standartSetId?: InputMaybe<Scalars['Float']['input']>;
  standartSetPrice?: InputMaybe<Scalars['Float']['input']>;
  standartSetQuantity?: InputMaybe<Scalars['Float']['input']>;
  standartSetStock?: InputMaybe<Scalars['Float']['input']>;
  timer?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CreateProductInput = {
  catalogPreviewId?: InputMaybe<Scalars['Int']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  exclusive?: InputMaybe<Scalars['String']['input']>;
  features?: InputMaybe<Array<Scalars['String']['input']>>;
  images?: InputMaybe<Array<Scalars['Int']['input']>>;
  name: Scalars['String']['input'];
  new?: InputMaybe<Scalars['Boolean']['input']>;
  nftId?: InputMaybe<Scalars['Float']['input']>;
  nftPreviewId?: InputMaybe<Scalars['Int']['input']>;
  number: Scalars['Float']['input'];
  price?: InputMaybe<Scalars['Float']['input']>;
  seriesId?: InputMaybe<Scalars['Float']['input']>;
  seriesPreviewId?: InputMaybe<Scalars['Int']['input']>;
  stickers?: InputMaybe<Array<Scalars['Int']['input']>>;
  stock?: InputMaybe<Scalars['Float']['input']>;
  whereToShow?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type CreateSeriesInput = {
  imageId?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  originalName: Scalars['String']['input'];
  previewImageId?: InputMaybe<Scalars['Int']['input']>;
  primaryFigureImageId?: InputMaybe<Scalars['Int']['input']>;
  primaryFigureName?: InputMaybe<Scalars['String']['input']>;
  primaryFigureNumber?: InputMaybe<Scalars['Float']['input']>;
};

export type CreateUserInput = {
  apartment?: InputMaybe<Scalars['String']['input']>;
  building?: InputMaybe<Scalars['String']['input']>;
  cart?: InputMaybe<Scalars['JSON']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  entrance?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  floor?: InputMaybe<Scalars['String']['input']>;
  house?: InputMaybe<Scalars['String']['input']>;
  intercom?: InputMaybe<Scalars['String']['input']>;
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Role>;
  secondName?: InputMaybe<Scalars['String']['input']>;
  social?: InputMaybe<Scalars['String']['input']>;
  street?: InputMaybe<Scalars['String']['input']>;
};

export type CreateUserNftInput = {
  checkedItems: Array<Scalars['Int']['input']>;
  nftId: Scalars['Float']['input'];
  saved?: InputMaybe<Scalars['Boolean']['input']>;
  userId: Scalars['Float']['input'];
};

export type CreateUserSeryInput = {
  checkedItems: Array<Scalars['Int']['input']>;
  saved?: InputMaybe<Scalars['Boolean']['input']>;
  seriesId: Scalars['Float']['input'];
  userId: Scalars['Float']['input'];
};

export type GetCartItemsArgs = {
  ids: Array<Scalars['Int']['input']>;
};

export type GetImagesArgs = {
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Pagination>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type GetNftArgs = {
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Pagination>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type GetProductsArgs = {
  category?: InputMaybe<Scalars['String']['input']>;
  isAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Pagination>;
  search?: InputMaybe<Scalars['String']['input']>;
  whereToShow?: InputMaybe<Scalars['String']['input']>;
};

export type GetSeriesArgs = {
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Pagination>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type GetUsersArgs = {
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Pagination>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type Image = {
  __typename?: 'Image';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
};

export type ImagesResponse = {
  __typename?: 'ImagesResponse';
  data: Array<Image>;
  meta?: Maybe<Meta>;
};

export type Meta = {
  __typename?: 'Meta';
  pagination?: Maybe<MetaPagination>;
};

export type MetaPagination = {
  __typename?: 'MetaPagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createImage: Image;
  createNft: Nft;
  createNftPage: NftPage;
  createProduct: Product;
  createSeries: Series;
  createUser: User;
  createUserNft: UserNft;
  createUserSery: UserSery;
  removeImage: Scalars['Boolean']['output'];
  removeNft: Nft;
  removeNftPage: NftPage;
  removeProduct: Product;
  removeSeries: Series;
  removeUser: User;
  removeUserNft: UserNft;
  removeUserSery: UserSery;
  signIn: AuthResponse;
  signOut: Scalars['Boolean']['output'];
  signUp: AuthResponse;
  tokensRefresh: AuthResponse;
  updateImage: Image;
  updateMe: User;
  updateNft: Nft;
  updateNftPage: NftPage;
  updateProduct: Product;
  updateSeries: Series;
  updateUser: User;
  updateUserNft: UserNft;
  updateUserSery: UserSery;
  uploadFile: Scalars['Boolean']['output'];
};


export type MutationCreateImageArgs = {
  createImageInput: CreateImageInput;
};


export type MutationCreateNftArgs = {
  createNftInput: CreateNftInput;
};


export type MutationCreateNftPageArgs = {
  createNftPageInput: CreateNftPageInput;
};


export type MutationCreateProductArgs = {
  createProductInput: CreateProductInput;
};


export type MutationCreateSeriesArgs = {
  createSeriesInput: CreateSeriesInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationCreateUserNftArgs = {
  createUserNftInput: CreateUserNftInput;
};


export type MutationCreateUserSeryArgs = {
  createUserSeryInput: CreateUserSeryInput;
};


export type MutationRemoveImageArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveNftArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveNftPageArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveProductArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveSeriesArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveUserNftArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveUserSeryArgs = {
  id: Scalars['Int']['input'];
};


export type MutationSignInArgs = {
  signInInput: SignInInput;
};


export type MutationSignUpArgs = {
  signUpInput: SignUpInput;
};


export type MutationUpdateImageArgs = {
  updateImageInput: UpdateImageInput;
};


export type MutationUpdateMeArgs = {
  updateMeInput: UpdateMeInput;
};


export type MutationUpdateNftArgs = {
  updateNftInput: UpdateNftInput;
};


export type MutationUpdateNftPageArgs = {
  updateNftPageInput: UpdateNftPageInput;
};


export type MutationUpdateProductArgs = {
  updateProductInput: UpdateProductInput;
};


export type MutationUpdateSeriesArgs = {
  updateSeriesInput: UpdateSeriesInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};


export type MutationUpdateUserNftArgs = {
  updateUserNftInput: UpdateUserNftInput;
};


export type MutationUpdateUserSeryArgs = {
  updateUserSeryInput: UpdateUserSeryInput;
};


export type MutationUploadFileArgs = {
  file: Array<Scalars['Upload']['input']>;
};

export type Nft = {
  __typename?: 'Nft';
  calendarImage?: Maybe<Image>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  event1_date?: Maybe<Scalars['DateTime']['output']>;
  event1_desc?: Maybe<Scalars['String']['output']>;
  event2_date?: Maybe<Scalars['DateTime']['output']>;
  event2_desc?: Maybe<Scalars['String']['output']>;
  event3_date?: Maybe<Scalars['DateTime']['output']>;
  event3_desc?: Maybe<Scalars['String']['output']>;
  event4_completed?: Maybe<Scalars['Boolean']['output']>;
  event4_desc?: Maybe<Scalars['String']['output']>;
  event4_quarter?: Maybe<Scalars['Float']['output']>;
  id: Scalars['Float']['output'];
  image?: Maybe<Image>;
  name: Scalars['String']['output'];
  originalName: Scalars['String']['output'];
  preview?: Maybe<Image>;
  primaryFigureImage?: Maybe<Image>;
  primaryFigureName?: Maybe<Scalars['String']['output']>;
  primaryFigureNumber?: Maybe<Scalars['Float']['output']>;
  products?: Maybe<Array<Product>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type NftPage = {
  __typename?: 'NftPage';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Float']['output'];
  newReleasePreview?: Maybe<Image>;
  newReleasePreviewId?: Maybe<Scalars['Float']['output']>;
  premiumSet?: Maybe<Product>;
  premiumSetQuantity?: Maybe<Scalars['Float']['output']>;
  standartSet?: Maybe<Product>;
  standartSetQuantity?: Maybe<Scalars['Float']['output']>;
  timer?: Maybe<Scalars['DateTime']['output']>;
};

export type NftResponse = {
  __typename?: 'NftResponse';
  data: Array<Nft>;
  meta?: Maybe<Meta>;
};

export type OrderBy = {
  field: Scalars['String']['input'];
  value: Sort;
};

export type Pagination = {
  page: Scalars['Int']['input'];
  pageSize: Scalars['Int']['input'];
};

export type Product = {
  __typename?: 'Product';
  catalogPreview?: Maybe<Image>;
  category?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  exclusive?: Maybe<Scalars['String']['output']>;
  features?: Maybe<Array<Scalars['String']['output']>>;
  id: Scalars['Float']['output'];
  images?: Maybe<Array<Image>>;
  name: Scalars['String']['output'];
  new: Scalars['Boolean']['output'];
  nft?: Maybe<Nft>;
  nftId?: Maybe<Scalars['Float']['output']>;
  nftPreview?: Maybe<Image>;
  number: Scalars['Float']['output'];
  price: Scalars['Float']['output'];
  series?: Maybe<Series>;
  seriesId?: Maybe<Scalars['Float']['output']>;
  seriesPreview?: Maybe<Image>;
  stickers?: Maybe<Array<Image>>;
  stock: Scalars['Float']['output'];
  type: ProductType;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  whereToShow?: Maybe<Array<Scalars['String']['output']>>;
};

export enum ProductType {
  CardsSet = 'CardsSet',
  Figure = 'Figure'
}

export type ProductsResponse = {
  __typename?: 'ProductsResponse';
  data: Array<Product>;
  meta?: Maybe<Meta>;
};

export type Query = {
  __typename?: 'Query';
  cartItems: Array<Product>;
  checkSuperUser: Scalars['Boolean']['output'];
  findAllSeries: SeriesResponse;
  findOneSeries: Series;
  getAdmin: User;
  getMe: User;
  image: Image;
  images: ImagesResponse;
  nft: Nft;
  nftPage: NftPage;
  nfts: NftResponse;
  product: Product;
  products: ProductsResponse;
  user: User;
  userNft: UserNft;
  userSeries: Array<UserSery>;
  userSery: UserSery;
  users: UsersResponse;
};


export type QueryCartItemsArgs = {
  args: GetCartItemsArgs;
};


export type QueryFindAllSeriesArgs = {
  args?: InputMaybe<GetSeriesArgs>;
};


export type QueryFindOneSeriesArgs = {
  id: Scalars['Int']['input'];
};


export type QueryImageArgs = {
  id: Scalars['Int']['input'];
};


export type QueryImagesArgs = {
  args?: InputMaybe<GetImagesArgs>;
};


export type QueryNftArgs = {
  id: Scalars['Int']['input'];
};


export type QueryNftsArgs = {
  args?: InputMaybe<GetNftArgs>;
};


export type QueryProductArgs = {
  id: Scalars['Int']['input'];
};


export type QueryProductsArgs = {
  args?: InputMaybe<GetProductsArgs>;
};


export type QueryUserArgs = {
  id: Scalars['Int']['input'];
};


export type QueryUserNftArgs = {
  id: Scalars['Int']['input'];
};


export type QueryUserSeryArgs = {
  id: Scalars['Int']['input'];
};


export type QueryUsersArgs = {
  args?: InputMaybe<GetUsersArgs>;
};

export enum Role {
  Admin = 'ADMIN',
  SuperAdmin = 'SUPER_ADMIN',
  User = 'USER'
}

export type Series = {
  __typename?: 'Series';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['Float']['output'];
  image?: Maybe<Image>;
  name: Scalars['String']['output'];
  originalName: Scalars['String']['output'];
  preview?: Maybe<Image>;
  primaryFigureImage?: Maybe<Image>;
  primaryFigureName?: Maybe<Scalars['String']['output']>;
  primaryFigureNumber?: Maybe<Scalars['Float']['output']>;
  products?: Maybe<Array<Product>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SeriesResponse = {
  __typename?: 'SeriesResponse';
  data: Array<Series>;
  meta?: Maybe<Meta>;
};

export type SignInInput = {
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
  remember?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SignUpInput = {
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
  role: Role;
};

export enum Sort {
  Asc = 'asc',
  Desc = 'desc'
}

export type UpdateImageInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};

export type UpdateMeInput = {
  apartment?: InputMaybe<Scalars['String']['input']>;
  building?: InputMaybe<Scalars['String']['input']>;
  cart?: InputMaybe<Scalars['JSON']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  entrance?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  floor?: InputMaybe<Scalars['String']['input']>;
  house?: InputMaybe<Scalars['String']['input']>;
  intercom?: InputMaybe<Scalars['String']['input']>;
  login?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  secondName?: InputMaybe<Scalars['String']['input']>;
  social?: InputMaybe<Scalars['String']['input']>;
  street?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateNftInput = {
  calendarImageId?: InputMaybe<Scalars['Int']['input']>;
  event1_date?: InputMaybe<Scalars['DateTime']['input']>;
  event1_desc?: InputMaybe<Scalars['String']['input']>;
  event2_date?: InputMaybe<Scalars['DateTime']['input']>;
  event2_desc?: InputMaybe<Scalars['String']['input']>;
  event3_date?: InputMaybe<Scalars['DateTime']['input']>;
  event3_desc?: InputMaybe<Scalars['String']['input']>;
  event4_completed?: InputMaybe<Scalars['Boolean']['input']>;
  event4_desc?: InputMaybe<Scalars['String']['input']>;
  event4_quarter?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['Int']['input'];
  imageId?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  originalName?: InputMaybe<Scalars['String']['input']>;
  previewImageId?: InputMaybe<Scalars['Int']['input']>;
  primaryFigureImageId?: InputMaybe<Scalars['Int']['input']>;
  primaryFigureName?: InputMaybe<Scalars['String']['input']>;
  primaryFigureNumber?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateNftPageInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  newReleasePreviewId?: InputMaybe<Scalars['Float']['input']>;
  premiumSetCatalogPreviewId?: InputMaybe<Scalars['Float']['input']>;
  premiumSetDescription?: InputMaybe<Scalars['String']['input']>;
  premiumSetId?: InputMaybe<Scalars['Float']['input']>;
  premiumSetPrice?: InputMaybe<Scalars['Float']['input']>;
  premiumSetQuantity?: InputMaybe<Scalars['Float']['input']>;
  premiumSetStock?: InputMaybe<Scalars['Float']['input']>;
  standartSetCatalogPreviewId?: InputMaybe<Scalars['Float']['input']>;
  standartSetDescription?: InputMaybe<Scalars['String']['input']>;
  standartSetId?: InputMaybe<Scalars['Float']['input']>;
  standartSetPrice?: InputMaybe<Scalars['Float']['input']>;
  standartSetQuantity?: InputMaybe<Scalars['Float']['input']>;
  standartSetStock?: InputMaybe<Scalars['Float']['input']>;
  timer?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UpdateProductInput = {
  catalogPreviewId?: InputMaybe<Scalars['Int']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  exclusive?: InputMaybe<Scalars['String']['input']>;
  features?: InputMaybe<Array<Scalars['String']['input']>>;
  id: Scalars['Int']['input'];
  images?: InputMaybe<Array<Scalars['Int']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  new?: InputMaybe<Scalars['Boolean']['input']>;
  nftId?: InputMaybe<Scalars['Float']['input']>;
  nftPreviewId?: InputMaybe<Scalars['Int']['input']>;
  number?: InputMaybe<Scalars['Float']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  seriesId?: InputMaybe<Scalars['Float']['input']>;
  seriesPreviewId?: InputMaybe<Scalars['Int']['input']>;
  stickers?: InputMaybe<Array<Scalars['Int']['input']>>;
  stock?: InputMaybe<Scalars['Float']['input']>;
  whereToShow?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type UpdateSeriesInput = {
  id: Scalars['Int']['input'];
  imageId?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  originalName?: InputMaybe<Scalars['String']['input']>;
  previewImageId?: InputMaybe<Scalars['Int']['input']>;
  primaryFigureImageId?: InputMaybe<Scalars['Int']['input']>;
  primaryFigureName?: InputMaybe<Scalars['String']['input']>;
  primaryFigureNumber?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateUserInput = {
  apartment?: InputMaybe<Scalars['String']['input']>;
  building?: InputMaybe<Scalars['String']['input']>;
  cart?: InputMaybe<Scalars['JSON']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  entrance?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  floor?: InputMaybe<Scalars['String']['input']>;
  house?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  intercom?: InputMaybe<Scalars['String']['input']>;
  login?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Role>;
  secondName?: InputMaybe<Scalars['String']['input']>;
  social?: InputMaybe<Scalars['String']['input']>;
  street?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserNftInput = {
  checkedItems?: InputMaybe<Array<Scalars['Int']['input']>>;
  id: Scalars['Int']['input'];
  nftId?: InputMaybe<Scalars['Float']['input']>;
  saved?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateUserSeryInput = {
  checkedItems?: InputMaybe<Array<Scalars['Int']['input']>>;
  id: Scalars['Int']['input'];
  saved?: InputMaybe<Scalars['Boolean']['input']>;
  seriesId?: InputMaybe<Scalars['Float']['input']>;
  userId?: InputMaybe<Scalars['Float']['input']>;
};

export type User = {
  __typename?: 'User';
  apartment?: Maybe<Scalars['String']['output']>;
  building?: Maybe<Scalars['String']['output']>;
  cart?: Maybe<Scalars['JSON']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  entrance?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  floor?: Maybe<Scalars['String']['output']>;
  house?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  intercom?: Maybe<Scalars['String']['output']>;
  login: Scalars['String']['output'];
  password: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role>;
  secondName?: Maybe<Scalars['String']['output']>;
  social?: Maybe<Scalars['String']['output']>;
  street?: Maybe<Scalars['String']['output']>;
  userNfts?: Maybe<Array<UserNft>>;
  userSeries?: Maybe<Array<UserSery>>;
};

export type UserNft = {
  __typename?: 'UserNft';
  checkedItems?: Maybe<Array<Product>>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Float']['output'];
  nft?: Maybe<Nft>;
  nftId: Scalars['Float']['output'];
  saved: Scalars['Boolean']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['Float']['output'];
};

export type UserSery = {
  __typename?: 'UserSery';
  checkedItems?: Maybe<Array<Product>>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Float']['output'];
  saved: Scalars['Boolean']['output'];
  series?: Maybe<Series>;
  seriesId: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['Float']['output'];
};

export type UsersResponse = {
  __typename?: 'UsersResponse';
  data: Array<User>;
  meta?: Maybe<Meta>;
};

export type SignUpMutationVariables = Exact<{
  input: SignUpInput;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp: { __typename?: 'AuthResponse', jwt: string } };

export type SignInMutationVariables = Exact<{
  input: SignInInput;
}>;


export type SignInMutation = { __typename?: 'Mutation', signIn: { __typename?: 'AuthResponse', jwt: string } };

export type SignOutMutationVariables = Exact<{ [key: string]: never; }>;


export type SignOutMutation = { __typename?: 'Mutation', signOut: boolean };

export type TokensRefreshMutationVariables = Exact<{ [key: string]: never; }>;


export type TokensRefreshMutation = { __typename?: 'Mutation', tokensRefresh: { __typename?: 'AuthResponse', jwt: string } };

export type GetProductsQueryVariables = Exact<{
  input?: InputMaybe<GetProductsArgs>;
}>;


export type GetProductsQuery = { __typename?: 'Query', products: { __typename?: 'ProductsResponse', data: Array<{ __typename?: 'Product', id: number, type: ProductType, number: number, name: string, price: number, features?: Array<string> | null, exclusive?: string | null, stock: number, new: boolean, series?: { __typename?: 'Series', id: number, name: string, originalName: string } | null, catalogPreview?: { __typename?: 'Image', id: number, name: string, url: string } | null }>, meta?: { __typename?: 'Meta', pagination?: { __typename?: 'MetaPagination', page: number, pageSize: number, total: number } | null } | null } };

export type GetProductQueryVariables = Exact<{
  input: Scalars['Int']['input'];
}>;


export type GetProductQuery = { __typename?: 'Query', product: { __typename?: 'Product', id: number, number: number, name: string, price: number, features?: Array<string> | null, exclusive?: string | null, stock: number, category?: string | null, description?: string | null, series?: { __typename?: 'Series', id: number, originalName: string } | null, images?: Array<{ __typename?: 'Image', id: number, name: string, url: string }> | null } };


export const SignUpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"signUp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignUpInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signUp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"signUpInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jwt"}}]}}]}}]} as unknown as DocumentNode<SignUpMutation, SignUpMutationVariables>;
export const SignInDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"signIn"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignInInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signIn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"signInInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jwt"}}]}}]}}]} as unknown as DocumentNode<SignInMutation, SignInMutationVariables>;
export const SignOutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"signOut"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signOut"}}]}}]} as unknown as DocumentNode<SignOutMutation, SignOutMutationVariables>;
export const TokensRefreshDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"tokensRefresh"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tokensRefresh"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jwt"}}]}}]}}]} as unknown as DocumentNode<TokensRefreshMutation, TokensRefreshMutationVariables>;
export const GetProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProducts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"GetProductsArgs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"args"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"features"}},{"kind":"Field","name":{"kind":"Name","value":"exclusive"}},{"kind":"Field","name":{"kind":"Name","value":"stock"}},{"kind":"Field","name":{"kind":"Name","value":"new"}},{"kind":"Field","name":{"kind":"Name","value":"series"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"originalName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"catalogPreview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetProductsQuery, GetProductsQueryVariables>;
export const GetProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"features"}},{"kind":"Field","name":{"kind":"Name","value":"exclusive"}},{"kind":"Field","name":{"kind":"Name","value":"stock"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"series"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"originalName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]} as unknown as DocumentNode<GetProductQuery, GetProductQueryVariables>;