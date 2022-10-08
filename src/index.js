import { createServer } from '@graphql-yoga/node'
import Query from './resolvers/Query'
import Mutation from './resolvers/Mutation'
import Usuario from './resolvers/Usuario'
import Comentario from './resolvers/Comentario'
import Reacao from './resolvers/Reacao'
import Post from './resolvers/Post'
import db from './db'
import reacaoCalculator from './resolvers/ReacaoCalculator'
import * as fs from 'fs'

const resolvers = {
    Query: Query,
    Mutation: Mutation,
    Usuario: Usuario,
    Comentario: Comentario,
    Reacao: Reacao,
    Post: Post,
}

const server = createServer ({
    schema: {
        typeDefs: fs.readFileSync('./src/schema.graphql', 'utf-8'), resolvers
    },
    context: {db: db}
})

server.start(() => {
    'Servidor no ar...'
})