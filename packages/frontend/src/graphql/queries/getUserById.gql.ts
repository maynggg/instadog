import { gql } from "@apollo/client";

export const GET_USER_BY_ID = gql`
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
