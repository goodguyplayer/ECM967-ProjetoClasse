import { createServer } from '@graphql-yoga/node'


const typeDefs = `
    type Usuario {
        id: ID!
        nome: String!
        idade: Int!,
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
        notas: [Int!]!
        bemVindo (nome: String): String!
        effectiveJava: Livro!
    }
`;


const resolvers = {
    Query: {
        bemVindo(parent, args, ctx, info) {
                //console.log("parent: " + JSON.stringify(parent));
                console.log("args: " + JSON.stringify(args));
                //console.log("ctx: " + JSON.stringify(ctx));
                //console.log("info: " + JSON.stringify(info));
                return `Bem vindo ${args.nome ? args.nome : 'visitante'}!`
            },

        effectiveJava() {
            return {
                id: '123456',
                titulo: 'Effective Java',
                genero: 'Técnico',
                edicao: 3,
                preco: 43.9
            }
        }
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