import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The Integer as string */
  BigInt: any;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type ActionCityInput = {
  id: Scalars['ID'];
  type: Scalars['String'];
};

export type AlternateName = {
  __typename?: 'AlternateName';
  alternateName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  isHistoric?: Maybe<Scalars['Boolean']>;
  isPreferredName?: Maybe<Scalars['Boolean']>;
  isShortName?: Maybe<Scalars['Boolean']>;
  isoLang?: Maybe<Scalars['String']>;
};

export type Auth = {
  __typename?: 'Auth';
  /** JWT access token */
  accessToken: Scalars['String'];
  /** JWT refresh token */
  refreshToken: Scalars['String'];
  user: User;
};

export type CitiesInput = {
  cityTagId: Scalars['ID'];
};

export type City = {
  __typename?: 'City';
  alternateName?: Maybe<Array<AlternateName>>;
  id: Scalars['String'];
  images?: Maybe<Array<Image>>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  overview?: Maybe<Scalars['String']>;
  population: Scalars['BigInt'];
  userVisited?: Maybe<Array<User>>;
  userWanted?: Maybe<Array<User>>;
  visitedCount: Scalars['Int'];
  wantedCount: Scalars['Int'];
};

export type CityConnection = {
  __typename?: 'CityConnection';
  edges?: Maybe<Array<CityEdge>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CityEdge = {
  __typename?: 'CityEdge';
  cursor: Scalars['String'];
  node: City;
};

export type CityOrder = {
  direction: OrderDirection;
};

export type Image = {
  __typename?: 'Image';
  city?: Maybe<Array<City>>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export enum Locale {
  En = 'EN',
  Ru = 'RU'
}

export type LoginInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addCity: City;
  confirmSmsCode: Scalars['Boolean'];
  deletePhoto: Scalars['Boolean'];
  login: Auth;
  moveCity: City;
  refreshToken: Token;
  removeCity: City;
  sendSmsCode: Scalars['Boolean'];
  signup: Auth;
  updateProfile: Scalars['Boolean'];
  uploadPhoto: Scalars['Boolean'];
};


export type MutationAddCityArgs = {
  input: ActionCityInput;
};


export type MutationConfirmSmsCodeArgs = {
  code: Scalars['String'];
  phone: Scalars['String'];
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationMoveCityArgs = {
  input: ActionCityInput;
};


export type MutationRemoveCityArgs = {
  input: ActionCityInput;
};


export type MutationSendSmsCodeArgs = {
  phone: Scalars['String'];
};


export type MutationSignupArgs = {
  input: SignupInput;
};


export type MutationUpdateProfileArgs = {
  input: UpdateProfileInput;
};


export type MutationUploadPhotoArgs = {
  file: Scalars['Upload'];
};

/** Possible directions in which to order a list of items when provided an `orderBy` argument. */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  cities: CityConnection;
  city: City;
  me: User;
  nearby: CityConnection;
  popular: CityConnection;
  stories: Array<Story>;
  tags: Array<Tag>;
  user: User;
  users: UserConnection;
  visited: CityConnection;
  wanted: CityConnection;
};


export type QueryCitiesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first: Scalars['Int'];
  input?: Maybe<CitiesInput>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CityOrder>;
  query?: Maybe<Scalars['String']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryCityArgs = {
  id: Scalars['String'];
};


export type QueryNearbyArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first: Scalars['Int'];
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CityOrder>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryPopularArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first: Scalars['Int'];
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CityOrder>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryUserArgs = {
  id: Scalars['String'];
};


export type QueryUsersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first: Scalars['Int'];
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UserOrder>;
  query?: Maybe<Scalars['String']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryVisitedArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first: Scalars['Int'];
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CityOrder>;
  skip?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['String']>;
};


export type QueryWantedArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first: Scalars['Int'];
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CityOrder>;
  skip?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['String']>;
};

export type SignupInput = {
  code: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  username: Scalars['String'];
};

export type Story = {
  __typename?: 'Story';
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  title: Scalars['String'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime'];
};

export type Tag = {
  __typename?: 'Tag';
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime'];
  emoji: Scalars['String'];
  id: Scalars['ID'];
  localizations?: Maybe<Array<TagLocalization>>;
  name: Scalars['String'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime'];
};

export type TagLocalization = {
  __typename?: 'TagLocalization';
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  locale: Locale;
  name: Scalars['String'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime'];
};

export type Token = {
  __typename?: 'Token';
  /** JWT access token */
  accessToken: Scalars['String'];
  /** JWT refresh token */
  refreshToken: Scalars['String'];
};

export type UpdateProfileInput = {
  bio: Scalars['String'];
  name: Scalars['String'];
  username: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  phone: Scalars['String'];
  rating: Scalars['Int'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
  visitedCount: Scalars['Int'];
  wantedCount: Scalars['Int'];
};

export type UserConnection = {
  __typename?: 'UserConnection';
  edges?: Maybe<Array<UserEdge>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String'];
  node: User;
};

export type UserOrder = {
  direction: OrderDirection;
};

export type RegularCityFragment = { __typename?: 'City', id: string, name: string, overview?: string | null | undefined, wantedCount: number, visitedCount: number, latitude?: number | null | undefined, longitude?: number | null | undefined, images?: Array<{ __typename?: 'Image', id: string, url: string }> | null | undefined, userWanted?: Array<{ __typename?: 'User', id: string, phone: string, email?: string | null | undefined, username: string, name?: string | null | undefined, avatar?: string | null | undefined, bio?: string | null | undefined, rating: number, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }> | null | undefined, userVisited?: Array<{ __typename?: 'User', id: string, phone: string, email?: string | null | undefined, username: string, name?: string | null | undefined, avatar?: string | null | undefined, bio?: string | null | undefined, rating: number, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }> | null | undefined, alternateName?: Array<{ __typename?: 'AlternateName', id: string, isoLang?: string | null | undefined, alternateName?: string | null | undefined, isPreferredName?: boolean | null | undefined, isShortName?: boolean | null | undefined, isHistoric?: boolean | null | undefined }> | null | undefined };

export type RegularImageFragment = { __typename?: 'Image', id: string, url: string };

export type RegularPageInfoFragment = { __typename?: 'PageInfo', endCursor?: string | null | undefined, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null | undefined };

export type RegularTagFragment = { __typename?: 'Tag', id: string, name: string, emoji: string, localizations?: Array<{ __typename?: 'TagLocalization', id: string, name: string, locale: Locale }> | null | undefined };

export type RegularTagLocalizationFragment = { __typename?: 'TagLocalization', id: string, name: string, locale: Locale };

export type RegularUserFragment = { __typename?: 'User', id: string, phone: string, email?: string | null | undefined, username: string, name?: string | null | undefined, avatar?: string | null | undefined, bio?: string | null | undefined, rating: number, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any };

export type AddCityMutationVariables = Exact<{
  input: ActionCityInput;
}>;


export type AddCityMutation = { __typename?: 'Mutation', addCity: { __typename?: 'City', id: string, name: string, overview?: string | null | undefined, wantedCount: number, visitedCount: number, latitude?: number | null | undefined, longitude?: number | null | undefined, images?: Array<{ __typename?: 'Image', id: string, url: string }> | null | undefined, userWanted?: Array<{ __typename?: 'User', id: string, phone: string, email?: string | null | undefined, username: string, name?: string | null | undefined, avatar?: string | null | undefined, bio?: string | null | undefined, rating: number, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }> | null | undefined, userVisited?: Array<{ __typename?: 'User', id: string, phone: string, email?: string | null | undefined, username: string, name?: string | null | undefined, avatar?: string | null | undefined, bio?: string | null | undefined, rating: number, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }> | null | undefined, alternateName?: Array<{ __typename?: 'AlternateName', id: string, isoLang?: string | null | undefined, alternateName?: string | null | undefined, isPreferredName?: boolean | null | undefined, isShortName?: boolean | null | undefined, isHistoric?: boolean | null | undefined }> | null | undefined } };

export type ConfirmSmsCodeMutationVariables = Exact<{
  phone: Scalars['String'];
  code: Scalars['String'];
}>;


export type ConfirmSmsCodeMutation = { __typename?: 'Mutation', confirmSmsCode: boolean };

export type DeletePhotoMutationVariables = Exact<{ [key: string]: never; }>;


export type DeletePhotoMutation = { __typename?: 'Mutation', deletePhoto: boolean };

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'Auth', accessToken: string, refreshToken: string, user: { __typename?: 'User', id: string, phone: string, email?: string | null | undefined, username: string, name?: string | null | undefined, avatar?: string | null | undefined, bio?: string | null | undefined, rating: number, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any } } };

export type MoveCityMutationVariables = Exact<{
  input: ActionCityInput;
}>;


export type MoveCityMutation = { __typename?: 'Mutation', moveCity: { __typename?: 'City', id: string, name: string, overview?: string | null | undefined, wantedCount: number, visitedCount: number, latitude?: number | null | undefined, longitude?: number | null | undefined, images?: Array<{ __typename?: 'Image', id: string, url: string }> | null | undefined, userWanted?: Array<{ __typename?: 'User', id: string, phone: string, email?: string | null | undefined, username: string, name?: string | null | undefined, avatar?: string | null | undefined, bio?: string | null | undefined, rating: number, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }> | null | undefined, userVisited?: Array<{ __typename?: 'User', id: string, phone: string, email?: string | null | undefined, username: string, name?: string | null | undefined, avatar?: string | null | undefined, bio?: string | null | undefined, rating: number, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }> | null | undefined, alternateName?: Array<{ __typename?: 'AlternateName', id: string, isoLang?: string | null | undefined, alternateName?: string | null | undefined, isPreferredName?: boolean | null | undefined, isShortName?: boolean | null | undefined, isHistoric?: boolean | null | undefined }> | null | undefined } };

export type RefreshTokenMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshTokenMutation = { __typename?: 'Mutation', refreshToken: { __typename?: 'Token', accessToken: string, refreshToken: string } };

export type RemoveCityMutationVariables = Exact<{
  input: ActionCityInput;
}>;


export type RemoveCityMutation = { __typename?: 'Mutation', removeCity: { __typename?: 'City', id: string, name: string, overview?: string | null | undefined, wantedCount: number, visitedCount: number, latitude?: number | null | undefined, longitude?: number | null | undefined, images?: Array<{ __typename?: 'Image', id: string, url: string }> | null | undefined, userWanted?: Array<{ __typename?: 'User', id: string, phone: string, email?: string | null | undefined, username: string, name?: string | null | undefined, avatar?: string | null | undefined, bio?: string | null | undefined, rating: number, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }> | null | undefined, userVisited?: Array<{ __typename?: 'User', id: string, phone: string, email?: string | null | undefined, username: string, name?: string | null | undefined, avatar?: string | null | undefined, bio?: string | null | undefined, rating: number, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }> | null | undefined, alternateName?: Array<{ __typename?: 'AlternateName', id: string, isoLang?: string | null | undefined, alternateName?: string | null | undefined, isPreferredName?: boolean | null | undefined, isShortName?: boolean | null | undefined, isHistoric?: boolean | null | undefined }> | null | undefined } };

export type SendSmsCodeMutationVariables = Exact<{
  phone: Scalars['String'];
}>;


export type SendSmsCodeMutation = { __typename?: 'Mutation', sendSmsCode: boolean };

export type SignupMutationVariables = Exact<{
  input: SignupInput;
}>;


export type SignupMutation = { __typename?: 'Mutation', signup: { __typename?: 'Auth', accessToken: string, refreshToken: string, user: { __typename?: 'User', id: string, phone: string, email?: string | null | undefined, username: string, name?: string | null | undefined, avatar?: string | null | undefined, bio?: string | null | undefined, rating: number, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any } } };

export type UpdateProfileMutationVariables = Exact<{
  input: UpdateProfileInput;
}>;


export type UpdateProfileMutation = { __typename?: 'Mutation', updateProfile: boolean };

export type UploadPhotoMutationVariables = Exact<{
  file: Scalars['Upload'];
}>;


export type UploadPhotoMutation = { __typename?: 'Mutation', uploadPhoto: boolean };

export type CitiesQueryVariables = Exact<{
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first: Scalars['Int'];
  input?: Maybe<CitiesInput>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CityOrder>;
  query?: Maybe<Scalars['String']>;
  skip?: Maybe<Scalars['Int']>;
}>;


export type CitiesQuery = { __typename?: 'Query', cities: { __typename?: 'CityConnection', totalCount: number, edges?: Array<{ __typename?: 'CityEdge', cursor: string, node: { __typename?: 'City', id: string, name: string, overview?: string | null | undefined, wantedCount: number, visitedCount: number, latitude?: number | null | undefined, longitude?: number | null | undefined, images?: Array<{ __typename?: 'Image', id: string, url: string }> | null | undefined, userWanted?: Array<{ __typename?: 'User', id: string, phone: string, email?: string | null | undefined, username: string, name?: string | null | undefined, avatar?: string | null | undefined, bio?: string | null | undefined, rating: number, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }> | null | undefined, userVisited?: Array<{ __typename?: 'User', id: string, phone: string, email?: string | null | undefined, username: string, name?: string | null | undefined, avatar?: string | null | undefined, bio?: string | null | undefined, rating: number, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }> | null | undefined, alternateName?: Array<{ __typename?: 'AlternateName', id: string, isoLang?: string | null | undefined, alternateName?: string | null | undefined, isPreferredName?: boolean | null | undefined, isShortName?: boolean | null | undefined, isHistoric?: boolean | null | undefined }> | null | undefined } }> | null | undefined, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null | undefined, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null | undefined } } };

export type CityQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type CityQuery = { __typename?: 'Query', city: { __typename?: 'City', id: string, name: string, overview?: string | null | undefined, wantedCount: number, visitedCount: number, latitude?: number | null | undefined, longitude?: number | null | undefined, images?: Array<{ __typename?: 'Image', id: string, url: string }> | null | undefined, userWanted?: Array<{ __typename?: 'User', id: string, phone: string, email?: string | null | undefined, username: string, name?: string | null | undefined, avatar?: string | null | undefined, bio?: string | null | undefined, rating: number, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }> | null | undefined, userVisited?: Array<{ __typename?: 'User', id: string, phone: string, email?: string | null | undefined, username: string, name?: string | null | undefined, avatar?: string | null | undefined, bio?: string | null | undefined, rating: number, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }> | null | undefined, alternateName?: Array<{ __typename?: 'AlternateName', id: string, isoLang?: string | null | undefined, alternateName?: string | null | undefined, isPreferredName?: boolean | null | undefined, isShortName?: boolean | null | undefined, isHistoric?: boolean | null | undefined }> | null | undefined } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, phone: string, email?: string | null | undefined, username: string, name?: string | null | undefined, avatar?: string | null | undefined, bio?: string | null | undefined, rating: number, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any } };

export type NearbyQueryVariables = Exact<{
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first: Scalars['Int'];
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CityOrder>;
  skip?: Maybe<Scalars['Int']>;
}>;


export type NearbyQuery = { __typename?: 'Query', nearby: { __typename?: 'CityConnection', totalCount: number, edges?: Array<{ __typename?: 'CityEdge', cursor: string, node: { __typename?: 'City', id: string, name: string, overview?: string | null | undefined, wantedCount: number, visitedCount: number, latitude?: number | null | undefined, longitude?: number | null | undefined, images?: Array<{ __typename?: 'Image', id: string, url: string }> | null | undefined, userWanted?: Array<{ __typename?: 'User', id: string, phone: string, email?: string | null | undefined, username: string, name?: string | null | undefined, avatar?: string | null | undefined, bio?: string | null | undefined, rating: number, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }> | null | undefined, userVisited?: Array<{ __typename?: 'User', id: string, phone: string, email?: string | null | undefined, username: string, name?: string | null | undefined, avatar?: string | null | undefined, bio?: string | null | undefined, rating: number, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }> | null | undefined, alternateName?: Array<{ __typename?: 'AlternateName', id: string, isoLang?: string | null | undefined, alternateName?: string | null | undefined, isPreferredName?: boolean | null | undefined, isShortName?: boolean | null | undefined, isHistoric?: boolean | null | undefined }> | null | undefined } }> | null | undefined, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null | undefined, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null | undefined } } };

export type PopularQueryVariables = Exact<{
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first: Scalars['Int'];
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CityOrder>;
  skip?: Maybe<Scalars['Int']>;
}>;


export type PopularQuery = { __typename?: 'Query', popular: { __typename?: 'CityConnection', totalCount: number, edges?: Array<{ __typename?: 'CityEdge', cursor: string, node: { __typename?: 'City', id: string, name: string, overview?: string | null | undefined, wantedCount: number, visitedCount: number, latitude?: number | null | undefined, longitude?: number | null | undefined, images?: Array<{ __typename?: 'Image', id: string, url: string }> | null | undefined, userWanted?: Array<{ __typename?: 'User', id: string, phone: string, email?: string | null | undefined, username: string, name?: string | null | undefined, avatar?: string | null | undefined, bio?: string | null | undefined, rating: number, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }> | null | undefined, userVisited?: Array<{ __typename?: 'User', id: string, phone: string, email?: string | null | undefined, username: string, name?: string | null | undefined, avatar?: string | null | undefined, bio?: string | null | undefined, rating: number, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }> | null | undefined, alternateName?: Array<{ __typename?: 'AlternateName', id: string, isoLang?: string | null | undefined, alternateName?: string | null | undefined, isPreferredName?: boolean | null | undefined, isShortName?: boolean | null | undefined, isHistoric?: boolean | null | undefined }> | null | undefined } }> | null | undefined, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null | undefined, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null | undefined } } };

export type TagsQueryVariables = Exact<{ [key: string]: never; }>;


export type TagsQuery = { __typename?: 'Query', tags: Array<{ __typename?: 'Tag', id: string, name: string, emoji: string, localizations?: Array<{ __typename?: 'TagLocalization', id: string, name: string, locale: Locale }> | null | undefined }> };

export type UserQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type UserQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, phone: string, email?: string | null | undefined, username: string, name?: string | null | undefined, avatar?: string | null | undefined, bio?: string | null | undefined, rating: number, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any } };

export type UsersQueryVariables = Exact<{
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first: Scalars['Int'];
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UserOrder>;
  query?: Maybe<Scalars['String']>;
  skip?: Maybe<Scalars['Int']>;
}>;


export type UsersQuery = { __typename?: 'Query', users: { __typename?: 'UserConnection', totalCount: number, edges?: Array<{ __typename?: 'UserEdge', cursor: string, node: { __typename?: 'User', id: string, phone: string, email?: string | null | undefined, username: string, name?: string | null | undefined, avatar?: string | null | undefined, bio?: string | null | undefined, rating: number, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any } }> | null | undefined, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null | undefined, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null | undefined } } };

export type VisitedQueryVariables = Exact<{
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first: Scalars['Int'];
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CityOrder>;
  skip?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['String']>;
}>;


export type VisitedQuery = { __typename?: 'Query', visited: { __typename?: 'CityConnection', totalCount: number, edges?: Array<{ __typename?: 'CityEdge', cursor: string, node: { __typename?: 'City', id: string, name: string, overview?: string | null | undefined, wantedCount: number, visitedCount: number, latitude?: number | null | undefined, longitude?: number | null | undefined, images?: Array<{ __typename?: 'Image', id: string, url: string }> | null | undefined, userWanted?: Array<{ __typename?: 'User', id: string, phone: string, email?: string | null | undefined, username: string, name?: string | null | undefined, avatar?: string | null | undefined, bio?: string | null | undefined, rating: number, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }> | null | undefined, userVisited?: Array<{ __typename?: 'User', id: string, phone: string, email?: string | null | undefined, username: string, name?: string | null | undefined, avatar?: string | null | undefined, bio?: string | null | undefined, rating: number, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }> | null | undefined, alternateName?: Array<{ __typename?: 'AlternateName', id: string, isoLang?: string | null | undefined, alternateName?: string | null | undefined, isPreferredName?: boolean | null | undefined, isShortName?: boolean | null | undefined, isHistoric?: boolean | null | undefined }> | null | undefined } }> | null | undefined, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null | undefined, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null | undefined } } };

export type WantedQueryVariables = Exact<{
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first: Scalars['Int'];
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CityOrder>;
  skip?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['String']>;
}>;


export type WantedQuery = { __typename?: 'Query', wanted: { __typename?: 'CityConnection', totalCount: number, edges?: Array<{ __typename?: 'CityEdge', cursor: string, node: { __typename?: 'City', id: string, name: string, overview?: string | null | undefined, wantedCount: number, visitedCount: number, latitude?: number | null | undefined, longitude?: number | null | undefined, images?: Array<{ __typename?: 'Image', id: string, url: string }> | null | undefined, userWanted?: Array<{ __typename?: 'User', id: string, phone: string, email?: string | null | undefined, username: string, name?: string | null | undefined, avatar?: string | null | undefined, bio?: string | null | undefined, rating: number, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }> | null | undefined, userVisited?: Array<{ __typename?: 'User', id: string, phone: string, email?: string | null | undefined, username: string, name?: string | null | undefined, avatar?: string | null | undefined, bio?: string | null | undefined, rating: number, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }> | null | undefined, alternateName?: Array<{ __typename?: 'AlternateName', id: string, isoLang?: string | null | undefined, alternateName?: string | null | undefined, isPreferredName?: boolean | null | undefined, isShortName?: boolean | null | undefined, isHistoric?: boolean | null | undefined }> | null | undefined } }> | null | undefined, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null | undefined, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null | undefined } } };

export const RegularImageFragmentDoc = gql`
    fragment RegularImage on Image {
  id
  url
}
    `;
export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  phone
  email
  username
  name
  avatar
  bio
  rating
  wantedCount
  visitedCount
  createdAt
  updatedAt
}
    `;
export const RegularCityFragmentDoc = gql`
    fragment RegularCity on City {
  id
  name
  overview
  wantedCount
  visitedCount
  latitude
  longitude
  images {
    ...RegularImage
  }
  userWanted {
    ...RegularUser
  }
  userVisited {
    ...RegularUser
  }
  alternateName {
    id
    isoLang
    alternateName
    isPreferredName
    isShortName
    isHistoric
  }
}
    ${RegularImageFragmentDoc}
${RegularUserFragmentDoc}`;
export const RegularPageInfoFragmentDoc = gql`
    fragment RegularPageInfo on PageInfo {
  endCursor
  hasNextPage
  hasPreviousPage
  startCursor
}
    `;
export const RegularTagLocalizationFragmentDoc = gql`
    fragment RegularTagLocalization on TagLocalization {
  id
  name
  locale
}
    `;
export const RegularTagFragmentDoc = gql`
    fragment RegularTag on Tag {
  id
  name
  emoji
  localizations {
    ...RegularTagLocalization
  }
}
    ${RegularTagLocalizationFragmentDoc}`;
export const AddCityDocument = gql`
    mutation addCity($input: ActionCityInput!) {
  addCity(input: $input) {
    ...RegularCity
  }
}
    ${RegularCityFragmentDoc}`;
export type AddCityMutationFn = Apollo.MutationFunction<AddCityMutation, AddCityMutationVariables>;

/**
 * __useAddCityMutation__
 *
 * To run a mutation, you first call `useAddCityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCityMutation, { data, loading, error }] = useAddCityMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddCityMutation(baseOptions?: Apollo.MutationHookOptions<AddCityMutation, AddCityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddCityMutation, AddCityMutationVariables>(AddCityDocument, options);
      }
export type AddCityMutationHookResult = ReturnType<typeof useAddCityMutation>;
export type AddCityMutationResult = Apollo.MutationResult<AddCityMutation>;
export type AddCityMutationOptions = Apollo.BaseMutationOptions<AddCityMutation, AddCityMutationVariables>;
export const ConfirmSmsCodeDocument = gql`
    mutation confirmSmsCode($phone: String!, $code: String!) {
  confirmSmsCode(phone: $phone, code: $code)
}
    `;
export type ConfirmSmsCodeMutationFn = Apollo.MutationFunction<ConfirmSmsCodeMutation, ConfirmSmsCodeMutationVariables>;

/**
 * __useConfirmSmsCodeMutation__
 *
 * To run a mutation, you first call `useConfirmSmsCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmSmsCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmSmsCodeMutation, { data, loading, error }] = useConfirmSmsCodeMutation({
 *   variables: {
 *      phone: // value for 'phone'
 *      code: // value for 'code'
 *   },
 * });
 */
export function useConfirmSmsCodeMutation(baseOptions?: Apollo.MutationHookOptions<ConfirmSmsCodeMutation, ConfirmSmsCodeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ConfirmSmsCodeMutation, ConfirmSmsCodeMutationVariables>(ConfirmSmsCodeDocument, options);
      }
export type ConfirmSmsCodeMutationHookResult = ReturnType<typeof useConfirmSmsCodeMutation>;
export type ConfirmSmsCodeMutationResult = Apollo.MutationResult<ConfirmSmsCodeMutation>;
export type ConfirmSmsCodeMutationOptions = Apollo.BaseMutationOptions<ConfirmSmsCodeMutation, ConfirmSmsCodeMutationVariables>;
export const DeletePhotoDocument = gql`
    mutation deletePhoto {
  deletePhoto
}
    `;
export type DeletePhotoMutationFn = Apollo.MutationFunction<DeletePhotoMutation, DeletePhotoMutationVariables>;

/**
 * __useDeletePhotoMutation__
 *
 * To run a mutation, you first call `useDeletePhotoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePhotoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePhotoMutation, { data, loading, error }] = useDeletePhotoMutation({
 *   variables: {
 *   },
 * });
 */
export function useDeletePhotoMutation(baseOptions?: Apollo.MutationHookOptions<DeletePhotoMutation, DeletePhotoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePhotoMutation, DeletePhotoMutationVariables>(DeletePhotoDocument, options);
      }
export type DeletePhotoMutationHookResult = ReturnType<typeof useDeletePhotoMutation>;
export type DeletePhotoMutationResult = Apollo.MutationResult<DeletePhotoMutation>;
export type DeletePhotoMutationOptions = Apollo.BaseMutationOptions<DeletePhotoMutation, DeletePhotoMutationVariables>;
export const LoginDocument = gql`
    mutation login($input: LoginInput!) {
  login(input: $input) {
    accessToken
    refreshToken
    user {
      ...RegularUser
    }
  }
}
    ${RegularUserFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const MoveCityDocument = gql`
    mutation moveCity($input: ActionCityInput!) {
  moveCity(input: $input) {
    ...RegularCity
  }
}
    ${RegularCityFragmentDoc}`;
export type MoveCityMutationFn = Apollo.MutationFunction<MoveCityMutation, MoveCityMutationVariables>;

/**
 * __useMoveCityMutation__
 *
 * To run a mutation, you first call `useMoveCityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMoveCityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [moveCityMutation, { data, loading, error }] = useMoveCityMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useMoveCityMutation(baseOptions?: Apollo.MutationHookOptions<MoveCityMutation, MoveCityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MoveCityMutation, MoveCityMutationVariables>(MoveCityDocument, options);
      }
export type MoveCityMutationHookResult = ReturnType<typeof useMoveCityMutation>;
export type MoveCityMutationResult = Apollo.MutationResult<MoveCityMutation>;
export type MoveCityMutationOptions = Apollo.BaseMutationOptions<MoveCityMutation, MoveCityMutationVariables>;
export const RefreshTokenDocument = gql`
    mutation refreshToken {
  refreshToken {
    accessToken
    refreshToken
  }
}
    `;
export type RefreshTokenMutationFn = Apollo.MutationFunction<RefreshTokenMutation, RefreshTokenMutationVariables>;

/**
 * __useRefreshTokenMutation__
 *
 * To run a mutation, you first call `useRefreshTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshTokenMutation, { data, loading, error }] = useRefreshTokenMutation({
 *   variables: {
 *   },
 * });
 */
export function useRefreshTokenMutation(baseOptions?: Apollo.MutationHookOptions<RefreshTokenMutation, RefreshTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RefreshTokenMutation, RefreshTokenMutationVariables>(RefreshTokenDocument, options);
      }
export type RefreshTokenMutationHookResult = ReturnType<typeof useRefreshTokenMutation>;
export type RefreshTokenMutationResult = Apollo.MutationResult<RefreshTokenMutation>;
export type RefreshTokenMutationOptions = Apollo.BaseMutationOptions<RefreshTokenMutation, RefreshTokenMutationVariables>;
export const RemoveCityDocument = gql`
    mutation removeCity($input: ActionCityInput!) {
  removeCity(input: $input) {
    ...RegularCity
  }
}
    ${RegularCityFragmentDoc}`;
export type RemoveCityMutationFn = Apollo.MutationFunction<RemoveCityMutation, RemoveCityMutationVariables>;

/**
 * __useRemoveCityMutation__
 *
 * To run a mutation, you first call `useRemoveCityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveCityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeCityMutation, { data, loading, error }] = useRemoveCityMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRemoveCityMutation(baseOptions?: Apollo.MutationHookOptions<RemoveCityMutation, RemoveCityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveCityMutation, RemoveCityMutationVariables>(RemoveCityDocument, options);
      }
export type RemoveCityMutationHookResult = ReturnType<typeof useRemoveCityMutation>;
export type RemoveCityMutationResult = Apollo.MutationResult<RemoveCityMutation>;
export type RemoveCityMutationOptions = Apollo.BaseMutationOptions<RemoveCityMutation, RemoveCityMutationVariables>;
export const SendSmsCodeDocument = gql`
    mutation sendSmsCode($phone: String!) {
  sendSmsCode(phone: $phone)
}
    `;
export type SendSmsCodeMutationFn = Apollo.MutationFunction<SendSmsCodeMutation, SendSmsCodeMutationVariables>;

/**
 * __useSendSmsCodeMutation__
 *
 * To run a mutation, you first call `useSendSmsCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendSmsCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendSmsCodeMutation, { data, loading, error }] = useSendSmsCodeMutation({
 *   variables: {
 *      phone: // value for 'phone'
 *   },
 * });
 */
export function useSendSmsCodeMutation(baseOptions?: Apollo.MutationHookOptions<SendSmsCodeMutation, SendSmsCodeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendSmsCodeMutation, SendSmsCodeMutationVariables>(SendSmsCodeDocument, options);
      }
export type SendSmsCodeMutationHookResult = ReturnType<typeof useSendSmsCodeMutation>;
export type SendSmsCodeMutationResult = Apollo.MutationResult<SendSmsCodeMutation>;
export type SendSmsCodeMutationOptions = Apollo.BaseMutationOptions<SendSmsCodeMutation, SendSmsCodeMutationVariables>;
export const SignupDocument = gql`
    mutation signup($input: SignupInput!) {
  signup(input: $input) {
    accessToken
    refreshToken
    user {
      ...RegularUser
    }
  }
}
    ${RegularUserFragmentDoc}`;
export type SignupMutationFn = Apollo.MutationFunction<SignupMutation, SignupMutationVariables>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: Apollo.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, options);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
export const UpdateProfileDocument = gql`
    mutation updateProfile($input: UpdateProfileInput!) {
  updateProfile(input: $input)
}
    `;
export type UpdateProfileMutationFn = Apollo.MutationFunction<UpdateProfileMutation, UpdateProfileMutationVariables>;

/**
 * __useUpdateProfileMutation__
 *
 * To run a mutation, you first call `useUpdateProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProfileMutation, { data, loading, error }] = useUpdateProfileMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateProfileMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProfileMutation, UpdateProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProfileMutation, UpdateProfileMutationVariables>(UpdateProfileDocument, options);
      }
export type UpdateProfileMutationHookResult = ReturnType<typeof useUpdateProfileMutation>;
export type UpdateProfileMutationResult = Apollo.MutationResult<UpdateProfileMutation>;
export type UpdateProfileMutationOptions = Apollo.BaseMutationOptions<UpdateProfileMutation, UpdateProfileMutationVariables>;
export const UploadPhotoDocument = gql`
    mutation uploadPhoto($file: Upload!) {
  uploadPhoto(file: $file)
}
    `;
export type UploadPhotoMutationFn = Apollo.MutationFunction<UploadPhotoMutation, UploadPhotoMutationVariables>;

/**
 * __useUploadPhotoMutation__
 *
 * To run a mutation, you first call `useUploadPhotoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadPhotoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadPhotoMutation, { data, loading, error }] = useUploadPhotoMutation({
 *   variables: {
 *      file: // value for 'file'
 *   },
 * });
 */
export function useUploadPhotoMutation(baseOptions?: Apollo.MutationHookOptions<UploadPhotoMutation, UploadPhotoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UploadPhotoMutation, UploadPhotoMutationVariables>(UploadPhotoDocument, options);
      }
export type UploadPhotoMutationHookResult = ReturnType<typeof useUploadPhotoMutation>;
export type UploadPhotoMutationResult = Apollo.MutationResult<UploadPhotoMutation>;
export type UploadPhotoMutationOptions = Apollo.BaseMutationOptions<UploadPhotoMutation, UploadPhotoMutationVariables>;
export const CitiesDocument = gql`
    query Cities($after: String, $before: String, $first: Int!, $input: CitiesInput, $last: Int, $orderBy: CityOrder, $query: String, $skip: Int) {
  cities(
    after: $after
    before: $before
    first: $first
    input: $input
    last: $last
    orderBy: $orderBy
    query: $query
    skip: $skip
  ) {
    edges {
      cursor
      node {
        ...RegularCity
      }
    }
    pageInfo {
      ...RegularPageInfo
    }
    totalCount
  }
}
    ${RegularCityFragmentDoc}
${RegularPageInfoFragmentDoc}`;

/**
 * __useCitiesQuery__
 *
 * To run a query within a React component, call `useCitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCitiesQuery({
 *   variables: {
 *      after: // value for 'after'
 *      before: // value for 'before'
 *      first: // value for 'first'
 *      input: // value for 'input'
 *      last: // value for 'last'
 *      orderBy: // value for 'orderBy'
 *      query: // value for 'query'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useCitiesQuery(baseOptions: Apollo.QueryHookOptions<CitiesQuery, CitiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CitiesQuery, CitiesQueryVariables>(CitiesDocument, options);
      }
export function useCitiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CitiesQuery, CitiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CitiesQuery, CitiesQueryVariables>(CitiesDocument, options);
        }
export type CitiesQueryHookResult = ReturnType<typeof useCitiesQuery>;
export type CitiesLazyQueryHookResult = ReturnType<typeof useCitiesLazyQuery>;
export type CitiesQueryResult = Apollo.QueryResult<CitiesQuery, CitiesQueryVariables>;
export const CityDocument = gql`
    query City($id: String!) {
  city(id: $id) {
    ...RegularCity
  }
}
    ${RegularCityFragmentDoc}`;

/**
 * __useCityQuery__
 *
 * To run a query within a React component, call `useCityQuery` and pass it any options that fit your needs.
 * When your component renders, `useCityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCityQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCityQuery(baseOptions: Apollo.QueryHookOptions<CityQuery, CityQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CityQuery, CityQueryVariables>(CityDocument, options);
      }
export function useCityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CityQuery, CityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CityQuery, CityQueryVariables>(CityDocument, options);
        }
export type CityQueryHookResult = ReturnType<typeof useCityQuery>;
export type CityLazyQueryHookResult = ReturnType<typeof useCityLazyQuery>;
export type CityQueryResult = Apollo.QueryResult<CityQuery, CityQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const NearbyDocument = gql`
    query Nearby($after: String, $before: String, $first: Int!, $last: Int, $orderBy: CityOrder, $skip: Int) {
  nearby(
    after: $after
    before: $before
    first: $first
    last: $last
    orderBy: $orderBy
    skip: $skip
  ) {
    edges {
      cursor
      node {
        ...RegularCity
      }
    }
    pageInfo {
      ...RegularPageInfo
    }
    totalCount
  }
}
    ${RegularCityFragmentDoc}
${RegularPageInfoFragmentDoc}`;

/**
 * __useNearbyQuery__
 *
 * To run a query within a React component, call `useNearbyQuery` and pass it any options that fit your needs.
 * When your component renders, `useNearbyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNearbyQuery({
 *   variables: {
 *      after: // value for 'after'
 *      before: // value for 'before'
 *      first: // value for 'first'
 *      last: // value for 'last'
 *      orderBy: // value for 'orderBy'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useNearbyQuery(baseOptions: Apollo.QueryHookOptions<NearbyQuery, NearbyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NearbyQuery, NearbyQueryVariables>(NearbyDocument, options);
      }
export function useNearbyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NearbyQuery, NearbyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NearbyQuery, NearbyQueryVariables>(NearbyDocument, options);
        }
export type NearbyQueryHookResult = ReturnType<typeof useNearbyQuery>;
export type NearbyLazyQueryHookResult = ReturnType<typeof useNearbyLazyQuery>;
export type NearbyQueryResult = Apollo.QueryResult<NearbyQuery, NearbyQueryVariables>;
export const PopularDocument = gql`
    query Popular($after: String, $before: String, $first: Int!, $last: Int, $orderBy: CityOrder, $skip: Int) {
  popular(
    after: $after
    before: $before
    first: $first
    last: $last
    orderBy: $orderBy
    skip: $skip
  ) {
    edges {
      cursor
      node {
        ...RegularCity
      }
    }
    pageInfo {
      ...RegularPageInfo
    }
    totalCount
  }
}
    ${RegularCityFragmentDoc}
${RegularPageInfoFragmentDoc}`;

/**
 * __usePopularQuery__
 *
 * To run a query within a React component, call `usePopularQuery` and pass it any options that fit your needs.
 * When your component renders, `usePopularQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePopularQuery({
 *   variables: {
 *      after: // value for 'after'
 *      before: // value for 'before'
 *      first: // value for 'first'
 *      last: // value for 'last'
 *      orderBy: // value for 'orderBy'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function usePopularQuery(baseOptions: Apollo.QueryHookOptions<PopularQuery, PopularQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PopularQuery, PopularQueryVariables>(PopularDocument, options);
      }
export function usePopularLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PopularQuery, PopularQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PopularQuery, PopularQueryVariables>(PopularDocument, options);
        }
export type PopularQueryHookResult = ReturnType<typeof usePopularQuery>;
export type PopularLazyQueryHookResult = ReturnType<typeof usePopularLazyQuery>;
export type PopularQueryResult = Apollo.QueryResult<PopularQuery, PopularQueryVariables>;
export const TagsDocument = gql`
    query Tags {
  tags {
    ...RegularTag
  }
}
    ${RegularTagFragmentDoc}`;

/**
 * __useTagsQuery__
 *
 * To run a query within a React component, call `useTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTagsQuery({
 *   variables: {
 *   },
 * });
 */
export function useTagsQuery(baseOptions?: Apollo.QueryHookOptions<TagsQuery, TagsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TagsQuery, TagsQueryVariables>(TagsDocument, options);
      }
export function useTagsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TagsQuery, TagsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TagsQuery, TagsQueryVariables>(TagsDocument, options);
        }
export type TagsQueryHookResult = ReturnType<typeof useTagsQuery>;
export type TagsLazyQueryHookResult = ReturnType<typeof useTagsLazyQuery>;
export type TagsQueryResult = Apollo.QueryResult<TagsQuery, TagsQueryVariables>;
export const UserDocument = gql`
    query User($id: String!) {
  user(id: $id) {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const UsersDocument = gql`
    query Users($after: String, $before: String, $first: Int!, $last: Int, $orderBy: UserOrder, $query: String, $skip: Int) {
  users(
    after: $after
    before: $before
    first: $first
    last: $last
    orderBy: $orderBy
    query: $query
    skip: $skip
  ) {
    edges {
      cursor
      node {
        ...RegularUser
      }
    }
    pageInfo {
      ...RegularPageInfo
    }
    totalCount
  }
}
    ${RegularUserFragmentDoc}
${RegularPageInfoFragmentDoc}`;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *      after: // value for 'after'
 *      before: // value for 'before'
 *      first: // value for 'first'
 *      last: // value for 'last'
 *      orderBy: // value for 'orderBy'
 *      query: // value for 'query'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useUsersQuery(baseOptions: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;
export const VisitedDocument = gql`
    query Visited($after: String, $before: String, $first: Int!, $last: Int, $orderBy: CityOrder, $skip: Int, $userId: String) {
  visited(
    after: $after
    before: $before
    first: $first
    last: $last
    orderBy: $orderBy
    skip: $skip
    userId: $userId
  ) {
    edges {
      cursor
      node {
        ...RegularCity
      }
    }
    pageInfo {
      ...RegularPageInfo
    }
    totalCount
  }
}
    ${RegularCityFragmentDoc}
${RegularPageInfoFragmentDoc}`;

/**
 * __useVisitedQuery__
 *
 * To run a query within a React component, call `useVisitedQuery` and pass it any options that fit your needs.
 * When your component renders, `useVisitedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVisitedQuery({
 *   variables: {
 *      after: // value for 'after'
 *      before: // value for 'before'
 *      first: // value for 'first'
 *      last: // value for 'last'
 *      orderBy: // value for 'orderBy'
 *      skip: // value for 'skip'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useVisitedQuery(baseOptions: Apollo.QueryHookOptions<VisitedQuery, VisitedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<VisitedQuery, VisitedQueryVariables>(VisitedDocument, options);
      }
export function useVisitedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VisitedQuery, VisitedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<VisitedQuery, VisitedQueryVariables>(VisitedDocument, options);
        }
export type VisitedQueryHookResult = ReturnType<typeof useVisitedQuery>;
export type VisitedLazyQueryHookResult = ReturnType<typeof useVisitedLazyQuery>;
export type VisitedQueryResult = Apollo.QueryResult<VisitedQuery, VisitedQueryVariables>;
export const WantedDocument = gql`
    query Wanted($after: String, $before: String, $first: Int!, $last: Int, $orderBy: CityOrder, $skip: Int, $userId: String) {
  wanted(
    after: $after
    before: $before
    first: $first
    last: $last
    orderBy: $orderBy
    skip: $skip
    userId: $userId
  ) {
    edges {
      cursor
      node {
        ...RegularCity
      }
    }
    pageInfo {
      ...RegularPageInfo
    }
    totalCount
  }
}
    ${RegularCityFragmentDoc}
${RegularPageInfoFragmentDoc}`;

/**
 * __useWantedQuery__
 *
 * To run a query within a React component, call `useWantedQuery` and pass it any options that fit your needs.
 * When your component renders, `useWantedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWantedQuery({
 *   variables: {
 *      after: // value for 'after'
 *      before: // value for 'before'
 *      first: // value for 'first'
 *      last: // value for 'last'
 *      orderBy: // value for 'orderBy'
 *      skip: // value for 'skip'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useWantedQuery(baseOptions: Apollo.QueryHookOptions<WantedQuery, WantedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WantedQuery, WantedQueryVariables>(WantedDocument, options);
      }
export function useWantedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WantedQuery, WantedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WantedQuery, WantedQueryVariables>(WantedDocument, options);
        }
export type WantedQueryHookResult = ReturnType<typeof useWantedQuery>;
export type WantedLazyQueryHookResult = ReturnType<typeof useWantedLazyQuery>;
export type WantedQueryResult = Apollo.QueryResult<WantedQuery, WantedQueryVariables>;