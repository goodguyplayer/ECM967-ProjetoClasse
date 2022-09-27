import { createServer } from '@graphql-yoga/node'


const typeDefs = `
    type Usuario {
        id: ID!
        nome: String!
        idade: Int!
    },
    type Post {
        id: ID!
        texto: String!
    },
    type Comentario {
        id: ID!
        texto: String!
    },
    type Reacao {
        id: ID!
        tipo: Boolean!
    },
    type Query {
        queryUser: Usuario!
        queryPost: Post!
        queryComment: Comentario!
        queryReaction: Reacao!
    }
`;

// Reaction - Type.:
/*
tipo == false, dislike
tipo == true, like
*/

const resolvers = {
    Query: {
        //bemVindo(parent, args, ctx, info) {
                //console.log("parent: " + JSON.stringify(parent));
                //console.log("args: " + JSON.stringify(args));
                //console.log("ctx: " + JSON.stringify(ctx));
                //console.log("info: " + JSON.stringify(info));
                //return `Bem vindo ${args.nome ? args.nome : 'visitante'}!`
            //},

            queryUser() {
                return {
                    id: '123456',
                    nome: "query User",
                    idade: 22,
                }
            },
            queryPost() {
                return {
                    id: '123456',
                    texto: 'query Post',
                }
            },
            queryComment() {
                return {
                    id: '123456',
                    texto: 'query Comment',
                }
            },
            queryReaction() {
                return {
                    id: '123456',
                    tipo: false, 
                }
            },

    }
};

const server = createServer ({
    schema: {
        typeDefs,
        resolvers
    }
})

server.start(() => {
    'Servidor no ar...'
})