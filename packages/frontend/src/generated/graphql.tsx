import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Comment = {
  __typename?: 'Comment';
  _id: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  postId: Scalars['String']['output'];
  text: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  userName: Scalars['String']['input'];
};

export type Like = {
  __typename?: 'Like';
  postId: Scalars['String']['output'];
  user?: Maybe<User>;
  userId: Scalars['String']['output'];
};

export type LoginResult = {
  __typename?: 'LoginResult';
  token: Scalars['String']['output'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  login: LoginResult;
  register: RegistrationResult;
  updateUser: User;
};


export type MutationLoginArgs = {
  password: Scalars['String']['input'];
  userName: Scalars['String']['input'];
};


export type MutationRegisterArgs = {
  input: CreateUserInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['String']['input'];
  input: UpdateUserInput;
};

export type Post = {
  __typename?: 'Post';
  _id: Scalars['String']['output'];
  caption?: Maybe<Scalars['String']['output']>;
  commentNum?: Maybe<Scalars['Int']['output']>;
  comments?: Maybe<Array<Comment>>;
  createdAt: Scalars['String']['output'];
  likeNum?: Maybe<Scalars['Int']['output']>;
  likes?: Maybe<Array<Like>>;
  photoUrl: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  getUserById?: Maybe<User>;
};


export type QueryGetUserByIdArgs = {
  id: Scalars['String']['input'];
};

export type RegistrationResult = {
  __typename?: 'RegistrationResult';
  token: Scalars['String']['output'];
  user: User;
};

export type UpdateUserInput = {
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['String']['output'];
  avatarUrl?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  followerNum?: Maybe<Scalars['Int']['output']>;
  followers?: Maybe<Array<User>>;
  followingNum?: Maybe<Scalars['Int']['output']>;
  followings?: Maybe<Array<User>>;
  password: Scalars['String']['output'];
  posts?: Maybe<Array<Post>>;
  updatedAt: Scalars['String']['output'];
  userName: Scalars['String']['output'];
};

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetUserByIdQuery = { __typename?: 'Query', getUserById?: { __typename?: 'User', _id: string, userName: string, password: string, email: string, bio?: string | null, avatarUrl?: string | null, createdAt: string, updatedAt: string, followerNum?: number | null, followingNum?: number | null, posts?: Array<{ __typename?: 'Post', _id: string, userId: string, photoUrl: string, caption?: string | null, createdAt: string, updatedAt: string, commentNum?: number | null, likeNum?: number | null }> | null, followers?: Array<{ __typename?: 'User', _id: string, userName: string }> | null, followings?: Array<{ __typename?: 'User', _id: string, userName: string }> | null } | null };


export const GetUserByIdDocument = gql`
    query getUserById($id: String!) {
  getUserById(id: $id) {
    _id
    userName
    password
    email
    bio
    avatarUrl
    createdAt
    updatedAt
    posts {
      _id
      userId
      photoUrl
      caption
      createdAt
      updatedAt
      commentNum
      likeNum
    }
    followerNum
    followingNum
    followers {
      _id
      userName
    }
    followings {
      _id
      userName
    }
  }
}
    `;

/**
 * __useGetUserByIdQuery__
 *
 * To run a query within a React component, call `useGetUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserByIdQuery(baseOptions: Apollo.QueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
      }
export function useGetUserByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
        }
export type GetUserByIdQueryHookResult = ReturnType<typeof useGetUserByIdQuery>;
export type GetUserByIdLazyQueryHookResult = ReturnType<typeof useGetUserByIdLazyQuery>;
export type GetUserByIdQueryResult = Apollo.QueryResult<GetUserByIdQuery, GetUserByIdQueryVariables>;