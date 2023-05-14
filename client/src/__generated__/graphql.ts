/* eslint-disable */
import { GraphQLResolveInfo } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type ListMetadata = {
  __typename?: 'ListMetadata';
  count?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyProduct?: Maybe<Array<Maybe<Product>>>;
  createProduct?: Maybe<Product>;
  removeProduct?: Maybe<Product>;
  updateProduct?: Maybe<Product>;
};


export type MutationCreateManyProductArgs = {
  data?: InputMaybe<Array<InputMaybe<ProductInput>>>;
};


export type MutationCreateProductArgs = {
  brand: Scalars['String'];
  colour: Scalars['String'];
  description: Scalars['String'];
  height: Scalars['Float'];
  img_url: Scalars['String'];
  length: Scalars['Float'];
  model_code: Scalars['String'];
  name: Scalars['String'];
  power: Scalars['String'];
  price: Scalars['Float'];
  quantity: Scalars['Int'];
  weight: Scalars['Int'];
  width: Scalars['Float'];
};


export type MutationRemoveProductArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateProductArgs = {
  brand?: InputMaybe<Scalars['String']>;
  colour?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  id: Scalars['ID'];
  img_url?: InputMaybe<Scalars['String']>;
  length?: InputMaybe<Scalars['Float']>;
  model_code?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  power?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  quantity?: InputMaybe<Scalars['Int']>;
  weight?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type Product = {
  __typename?: 'Product';
  brand: Scalars['String'];
  colour: Scalars['String'];
  description: Scalars['String'];
  height: Scalars['Float'];
  id: Scalars['ID'];
  img_url: Scalars['String'];
  length: Scalars['Float'];
  model_code: Scalars['String'];
  name: Scalars['String'];
  power: Scalars['String'];
  price: Scalars['Float'];
  quantity: Scalars['Int'];
  weight: Scalars['Int'];
  width: Scalars['Float'];
};

export type ProductFilter = {
  brand?: InputMaybe<Scalars['String']>;
  brand_neq?: InputMaybe<Scalars['String']>;
  colour?: InputMaybe<Scalars['String']>;
  colour_neq?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  description_neq?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  height_gt?: InputMaybe<Scalars['Float']>;
  height_gte?: InputMaybe<Scalars['Float']>;
  height_lt?: InputMaybe<Scalars['Float']>;
  height_lte?: InputMaybe<Scalars['Float']>;
  height_neq?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['ID']>;
  id_neq?: InputMaybe<Scalars['ID']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  img_url?: InputMaybe<Scalars['String']>;
  img_url_neq?: InputMaybe<Scalars['String']>;
  length?: InputMaybe<Scalars['Float']>;
  length_gt?: InputMaybe<Scalars['Float']>;
  length_gte?: InputMaybe<Scalars['Float']>;
  length_lt?: InputMaybe<Scalars['Float']>;
  length_lte?: InputMaybe<Scalars['Float']>;
  length_neq?: InputMaybe<Scalars['Float']>;
  model_code?: InputMaybe<Scalars['String']>;
  model_code_neq?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_neq?: InputMaybe<Scalars['String']>;
  power?: InputMaybe<Scalars['String']>;
  power_neq?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  price_gt?: InputMaybe<Scalars['Float']>;
  price_gte?: InputMaybe<Scalars['Float']>;
  price_lt?: InputMaybe<Scalars['Float']>;
  price_lte?: InputMaybe<Scalars['Float']>;
  price_neq?: InputMaybe<Scalars['Float']>;
  q?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
  quantity_gt?: InputMaybe<Scalars['Int']>;
  quantity_gte?: InputMaybe<Scalars['Int']>;
  quantity_lt?: InputMaybe<Scalars['Int']>;
  quantity_lte?: InputMaybe<Scalars['Int']>;
  quantity_neq?: InputMaybe<Scalars['Int']>;
  weight?: InputMaybe<Scalars['Int']>;
  weight_gt?: InputMaybe<Scalars['Int']>;
  weight_gte?: InputMaybe<Scalars['Int']>;
  weight_lt?: InputMaybe<Scalars['Int']>;
  weight_lte?: InputMaybe<Scalars['Int']>;
  weight_neq?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Float']>;
  width_gt?: InputMaybe<Scalars['Float']>;
  width_gte?: InputMaybe<Scalars['Float']>;
  width_lt?: InputMaybe<Scalars['Float']>;
  width_lte?: InputMaybe<Scalars['Float']>;
  width_neq?: InputMaybe<Scalars['Float']>;
};

export type ProductInput = {
  brand: Scalars['String'];
  colour: Scalars['String'];
  description: Scalars['String'];
  height: Scalars['Float'];
  id: Scalars['ID'];
  img_url: Scalars['String'];
  length: Scalars['Float'];
  model_code: Scalars['String'];
  name: Scalars['String'];
  power: Scalars['String'];
  price: Scalars['Float'];
  quantity: Scalars['Int'];
  weight: Scalars['Int'];
  width: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  Product?: Maybe<Product>;
  _allProductsMeta?: Maybe<ListMetadata>;
  allProducts?: Maybe<Array<Maybe<Product>>>;
};


export type QueryProductArgs = {
  id: Scalars['ID'];
};


export type Query_AllProductsMetaArgs = {
  filter?: InputMaybe<ProductFilter>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};


export type QueryAllProductsArgs = {
  filter?: InputMaybe<ProductFilter>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
};

export type Query_ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type Query_ProductsQuery = { __typename?: 'Query', allProducts?: Array<{ __typename?: 'Product', id: string, name: string, power: string, description: string, price: number, quantity: number, brand: string, weight: number, height: number, width: number, length: number, model_code: string, colour: string, img_url: string } | null> | null };


export const Query_ProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"query_products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allProducts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"power"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"brand"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"length"}},{"kind":"Field","name":{"kind":"Name","value":"model_code"}},{"kind":"Field","name":{"kind":"Name","value":"colour"}},{"kind":"Field","name":{"kind":"Name","value":"img_url"}}]}}]}}]} as unknown as DocumentNode<Query_ProductsQuery, Query_ProductsQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type ListMetadata = {
  __typename?: 'ListMetadata';
  count?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyProduct?: Maybe<Array<Maybe<Product>>>;
  createProduct?: Maybe<Product>;
  removeProduct?: Maybe<Product>;
  updateProduct?: Maybe<Product>;
};


export type MutationCreateManyProductArgs = {
  data?: InputMaybe<Array<InputMaybe<ProductInput>>>;
};


export type MutationCreateProductArgs = {
  brand: Scalars['String'];
  colour: Scalars['String'];
  description: Scalars['String'];
  height: Scalars['Float'];
  img_url: Scalars['String'];
  length: Scalars['Float'];
  model_code: Scalars['String'];
  name: Scalars['String'];
  power: Scalars['String'];
  price: Scalars['Float'];
  quantity: Scalars['Int'];
  weight: Scalars['Int'];
  width: Scalars['Float'];
};


export type MutationRemoveProductArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateProductArgs = {
  brand?: InputMaybe<Scalars['String']>;
  colour?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  id: Scalars['ID'];
  img_url?: InputMaybe<Scalars['String']>;
  length?: InputMaybe<Scalars['Float']>;
  model_code?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  power?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  quantity?: InputMaybe<Scalars['Int']>;
  weight?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type Product = {
  __typename?: 'Product';
  brand: Scalars['String'];
  colour: Scalars['String'];
  description: Scalars['String'];
  height: Scalars['Float'];
  id: Scalars['ID'];
  img_url: Scalars['String'];
  length: Scalars['Float'];
  model_code: Scalars['String'];
  name: Scalars['String'];
  power: Scalars['String'];
  price: Scalars['Float'];
  quantity: Scalars['Int'];
  weight: Scalars['Int'];
  width: Scalars['Float'];
};

export type ProductFilter = {
  brand?: InputMaybe<Scalars['String']>;
  brand_neq?: InputMaybe<Scalars['String']>;
  colour?: InputMaybe<Scalars['String']>;
  colour_neq?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  description_neq?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  height_gt?: InputMaybe<Scalars['Float']>;
  height_gte?: InputMaybe<Scalars['Float']>;
  height_lt?: InputMaybe<Scalars['Float']>;
  height_lte?: InputMaybe<Scalars['Float']>;
  height_neq?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['ID']>;
  id_neq?: InputMaybe<Scalars['ID']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  img_url?: InputMaybe<Scalars['String']>;
  img_url_neq?: InputMaybe<Scalars['String']>;
  length?: InputMaybe<Scalars['Float']>;
  length_gt?: InputMaybe<Scalars['Float']>;
  length_gte?: InputMaybe<Scalars['Float']>;
  length_lt?: InputMaybe<Scalars['Float']>;
  length_lte?: InputMaybe<Scalars['Float']>;
  length_neq?: InputMaybe<Scalars['Float']>;
  model_code?: InputMaybe<Scalars['String']>;
  model_code_neq?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_neq?: InputMaybe<Scalars['String']>;
  power?: InputMaybe<Scalars['String']>;
  power_neq?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  price_gt?: InputMaybe<Scalars['Float']>;
  price_gte?: InputMaybe<Scalars['Float']>;
  price_lt?: InputMaybe<Scalars['Float']>;
  price_lte?: InputMaybe<Scalars['Float']>;
  price_neq?: InputMaybe<Scalars['Float']>;
  q?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
  quantity_gt?: InputMaybe<Scalars['Int']>;
  quantity_gte?: InputMaybe<Scalars['Int']>;
  quantity_lt?: InputMaybe<Scalars['Int']>;
  quantity_lte?: InputMaybe<Scalars['Int']>;
  quantity_neq?: InputMaybe<Scalars['Int']>;
  weight?: InputMaybe<Scalars['Int']>;
  weight_gt?: InputMaybe<Scalars['Int']>;
  weight_gte?: InputMaybe<Scalars['Int']>;
  weight_lt?: InputMaybe<Scalars['Int']>;
  weight_lte?: InputMaybe<Scalars['Int']>;
  weight_neq?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Float']>;
  width_gt?: InputMaybe<Scalars['Float']>;
  width_gte?: InputMaybe<Scalars['Float']>;
  width_lt?: InputMaybe<Scalars['Float']>;
  width_lte?: InputMaybe<Scalars['Float']>;
  width_neq?: InputMaybe<Scalars['Float']>;
};

export type ProductInput = {
  brand: Scalars['String'];
  colour: Scalars['String'];
  description: Scalars['String'];
  height: Scalars['Float'];
  id: Scalars['ID'];
  img_url: Scalars['String'];
  length: Scalars['Float'];
  model_code: Scalars['String'];
  name: Scalars['String'];
  power: Scalars['String'];
  price: Scalars['Float'];
  quantity: Scalars['Int'];
  weight: Scalars['Int'];
  width: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  Product?: Maybe<Product>;
  _allProductsMeta?: Maybe<ListMetadata>;
  allProducts?: Maybe<Array<Maybe<Product>>>;
};


export type QueryProductArgs = {
  id: Scalars['ID'];
};


export type Query_AllProductsMetaArgs = {
  filter?: InputMaybe<ProductFilter>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};


export type QueryAllProductsArgs = {
  filter?: InputMaybe<ProductFilter>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  ListMetadata: ResolverTypeWrapper<ListMetadata>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Product: ResolverTypeWrapper<Product>;
  ProductFilter: ProductFilter;
  ProductInput: ProductInput;
  Query: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  ListMetadata: ListMetadata;
  Int: Scalars['Int'];
  Mutation: {};
  String: Scalars['String'];
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  Product: Product;
  ProductFilter: ProductFilter;
  ProductInput: ProductInput;
  Query: {};
  Boolean: Scalars['Boolean'];
};

export type ListMetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['ListMetadata'] = ResolversParentTypes['ListMetadata']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createManyProduct?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType, Partial<MutationCreateManyProductArgs>>;
  createProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationCreateProductArgs, 'brand' | 'colour' | 'description' | 'height' | 'img_url' | 'length' | 'model_code' | 'name' | 'power' | 'price' | 'quantity' | 'weight' | 'width'>>;
  removeProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationRemoveProductArgs, 'id'>>;
  updateProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationUpdateProductArgs, 'id'>>;
};

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  brand?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  colour?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  height?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  img_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  length?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  model_code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  power?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  weight?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  width?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  Product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<QueryProductArgs, 'id'>>;
  _allProductsMeta?: Resolver<Maybe<ResolversTypes['ListMetadata']>, ParentType, ContextType, Partial<Query_AllProductsMetaArgs>>;
  allProducts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType, Partial<QueryAllProductsArgs>>;
};

export type Resolvers<ContextType = any> = {
  ListMetadata?: ListMetadataResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};

