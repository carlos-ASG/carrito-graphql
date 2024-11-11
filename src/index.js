const {ApolloServer} = require('apollo-server');
const mongoose = require('mongoose');
const {mergeTypeDefs, mergeResolvers} = require('@graphql-tools/merge');

const productTypeDefs = require('./schemas/productSchema');
const productResolvers = require('./resolvers/productResolver');

const userTypeDefs = require('./schemas/userSchema');
const userResolvers = require('./resolvers/userResolver');

const typeDefs = mergeTypeDefs([productTypeDefs, userTypeDefs]);
const resolvers = mergeResolvers([productResolvers, userResolvers]);

const startServer = async () => {
    await mongoose.connect('mongodb+srv://caalsandovalgu:Chabeto789@cluster0.m9gzv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    const server = new ApolloServer({typeDefs, resolvers});

    server.listen().then(({url}) => {
        console.log(`Server corriendo en ${url}`);
    });
}

startServer();