const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Ticket {
        _id: ID
        puchaseDate: Date
        ticketBumber: Number!
        product: [Product]
    }

    type Charity {
        name: String!
        website: String
        image: String
        description: String
    }
    
    type Product {
        name: String!
        description: String
        image: String
        donation: Float!
        ticketCount: Number
        charity: Charity!
    }

    type User {
        userName: String!
        email: String!
        password: String!
        charityAdmin: [CharityAdmin]
        tickets: [Ticket]
        favCharitys: [Charity]
    }

    type Checkout {
        session: ID
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        charities: [Charity]
        charity(_id: ID!): Charity
        products(charity: ID, name: String): [Product]
        product(_id: ID!): Product
        user: User
        tickets(user: ID, name: String): [Ticket]
        ticket(_id: ID!): Ticket
        checkout(products: [ID]!): Checkout
    }

    type Mutation {
        addUser(userName: String!, email: String!, password: String!): Auth
        updateUser(userName: String!, email: String!, password: String!): User
        updateProduct(_id: ID!, ticketCount: Int!): Product
        login(email: String!, password: String!): Auth
    }

`;

module.exports = typeDefs;