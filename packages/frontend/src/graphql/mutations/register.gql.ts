import { gql } from "graphql-request";

export const REGISTER = gql`
  mutation register($input: CreateUserInput!) {
    register(input: $input) {
      token
      user {
        _id
      }
    }
  }
`;
