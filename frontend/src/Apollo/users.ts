import { gql } from "@apollo/client";

export const All_USERS = gql`
  query GetAllUser {
    users: getAllUser {
      dateCreate
      email
      roles
      id
      userName
    }
  }
`;
export const GET_ONE_USER = gql`
  query GetOneUser($id: Float!) {
    user: getOneUser(id: $id) {
      profile {
        firstName
        id
        lastName
      }
    }
  }
`;
export const CREATE_USER = gql`
  mutation CreateUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      dateCreate
      email
      profile {
        firstName
        id
        lastName
      }
      roles
      id
      userName
    }
  }
`;

export const REMOVE_USER = gql`
  mutation RemoveUser($id: Float!) {
    removeUser(id: $id)
  }
`;

export const ONE_USER = gql`
  mutation GetOneUser($id: Float!) {
    getOneUser(id: $id) {
      dateCreate
      email
      profile {
        firstName
        id
        lastName
      }
      roles
      id
      userName
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      dateCreate
      email
      profile {
        firstName
        id
        lastName
      }
      roles
      id
      userName
    }
  }
`;

export const BY_ROLES = gql`
  query GetUserByRole($roles: [string!]) {
    usersRole: getUserByRole(roles: $roles) {
      dateCreate
      email
      roles
      id
      userName
    }
  }
`;
