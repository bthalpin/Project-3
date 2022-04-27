import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($userName: String!, $email: String!, $password: String!, $location: String!) {
    addUser(userName: $userName, email: $email, password: $password, location: $location) {
      user {
        _id
        userName
        email
        password
        location
      }
      token
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($userName: String!, $email: String!, $password: String!, $location: String!) {
    updateUser(userName: $userName, email: $email, password: $password, location: $location) {
      _id
      userName
      email
      password
      location
    }
  }
`;

export const REMOVE_USER = gql`
  mutation removeUser {
    removeUser {
      _id
      userName
      email
      password
      location
    }
  }
`;

export const ADD_PRODUCT = gql`
  mutation addProduct($name: String!, $image: String!, $price: Int!, $charityId: ID!, $description: String, $ticketCount: Int) {
    addProduct(name: $name, image: $image, price: $price, charity_id: $charityId, description: $description, ticketCount: $ticketCount) {
      _id
      name
      description
      image
      price
      ticketCount
    }
  }
`;

export const UPDATE_PRODUCT_INFO = gql`
  mutation UpdateProductInfo($productId: ID!, $name: String!, $price: Int!, $ticketCount: Int!, $description: String, $image: String) {
    updateProductInfo(productId: $productId, name: $name, price: $price, ticketCount: $ticketCount, description: $description, image: $image) {
      _id
      name
      description
      image
      price
      ticketCount
    }
  }
`;

export const REMOVE_PRODUCT = gql`
  mutation RemoveProduct($productId: ID!) {
    removeProduct(productId: $productId) {
      _id
      name
      description
      image
      price
      ticketCount
    }
  }
`;

export const ADD_CHARITY = gql`
  mutation addCharity($name: String!, $website: String, $image: String, $description: String) {
    addCharity(name: $name, website: $website, image: $image, description: $description) {
      _id
      name
      website
      image
      description
    }
  }
`;

export const UPDATE_CHARITY = gql`
  mutation UpdateCharity($name: String!, $website: String, $image: String, $description: String, $charityId: ID!) {
    updateCharity(name: $name, website: $website, image: $image, description: $description, charityId: $charityId) {
      _id
      name
      website
      image
      description
    }
  }
`;

export const REMOVE_CHARITY = gql`
  mutation RemoveCharity($charityId: ID!) {
    removeCharity(charityId: $charityId) {
      _id
      name
      website
      image
      description
    }
  }
`;

//TODO: NEED TO ADD "ADD_TICKET"

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        _id
        userName
        email
        password
        location
      }
      token
    }
  }
`;