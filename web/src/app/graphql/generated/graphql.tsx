import { gql } from '@apollo/client';
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
  DateTime: { input: any; output: any; }
};

export type Course = {
  __typename?: 'Course';
  id: Scalars['ID']['output'];
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type CreateCourseInput = {
  title: Scalars['String']['input'];
};

export type CreateProductInput = {
  title: Scalars['String']['input'];
};

export type CreatePurchaseInput = {
  productId: Scalars['String']['input'];
};

export type Enrollment = {
  __typename?: 'Enrollment';
  canceledAt?: Maybe<Scalars['DateTime']['output']>;
  course: Course;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  student: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCourse: Course;
  createProduct: Product;
  createPurchase: Purchase;
};


export type MutationCreateCourseArgs = {
  data: CreateCourseInput;
};


export type MutationCreateProductArgs = {
  data: CreateProductInput;
};


export type MutationCreatePurchaseArgs = {
  data: CreatePurchaseInput;
};

export type Product = {
  __typename?: 'Product';
  id: Scalars['ID']['output'];
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type Purchase = {
  __typename?: 'Purchase';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  product: Product;
  status: PurchaseStatus;
};

/** Available purchase status */
export enum PurchaseStatus {
  Approved = 'APPROVED',
  Failed = 'FAILED',
  Pending = 'PENDING'
}

export type Query = {
  __typename?: 'Query';
  course: Course;
  courses: Array<Course>;
  enrollments: Array<Enrollment>;
  me: User;
  products: Array<Product>;
  purchases: Array<Purchase>;
  students: Array<User>;
};


export type QueryCourseArgs = {
  id: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  authUserId: Scalars['ID']['output'];
  enrollments: Array<Enrollment>;
  purchases: Array<Purchase>;
};
