import { createServer } from '@graphql-yoga/node'
import Query from './resolvers/Query'
import Mutation from './resolvers/Mutation'
import * as fs from 'fs'

const resolvers = {
    Query: Query,
    Mutation: Mutation
}

const server = createServer ({
    schema: {
        typeDefs: fs.readFileSync('./src/schema.graphql', 'utf-8'),
        resolvers
    }
})

server.start(() => {
    'Servidor no ar...'
})