// src/lambda/graphql.js
const { ApolloServer, gql } = require("apollo-server-lambda");

const typeDefs = gql`
    type Query {
        hello: String
        catPhotoUrl: String
    }
`;

const resolvers = {
    Query: {
        hello: (root, args, context) => {
            return "Hello, world!";
        },
        catPhotoUrl: (root, args, context) => {
            return "https://i.ytimg.com/vi/sdf3dDOo6nY/maxresdefault.jpg";
        }
    }
};

const server = new ApolloServer({
    introspection: true,
    playground: true,
    typeDefs,
    resolvers
});

exports.handler = server.createHandler();
