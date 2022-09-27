import { createServer } from '@graphql-yoga/node'
import { v4 as uuidv4 } from "uuid";

const usuarios = [] 
const posts = [] 
const comentarios = [] 
const reacaos = [] 

const typeDefs = `
    type Usuario {
        id: ID!
        nome: String!
        idade: Int!
        posts:[Post!]!
        comentarios:[Comentario!]!
        reacao:[Reacao!]!
    },
    type Post {
        id: ID!
        texto: String!
        comentarios:[Comentario!]!
        autor: Usuario!
        reacao:[Reacao!]!
    },
    type Comentario {
        id: ID!
        texto: String!
        reacao:[Reacao!]!
        autor: Usuario!
        post: Post!
    },
    type Reacao {
        id: ID!
        tipo: Boolean!
        autor: Usuario!
    },
    type Query {
        listAllUsers: Usuario!
        listAllPosts: Post!
        listAllComment: Comentario!
        queryReaction: Reacao!
    },
    type Mutation{
        createUser(nome:String!, idade:Int!):Usuario!
        createPost(autor_id:ID!, texto:String!):Post!
    }
`;

// Reaction - Type.:
/*
tipo == false, dislike
tipo == true, like
*/

const resolvers = {
    Query: {
            listAllUsers() {
                return {
                    id: '123456',
                    nome: "query User",
                    idade: 22,
                }
            },
            listAllPosts() {
                return {
                    id: '123456',
                    texto: 'query Post',
                }
            },
            listAllComment() {
                return {
                    id: '123456',
                    texto: 'query Comment',
                }
            },
    },
    Mutation: {
        createUser(parent, args, ctx, info){
            const usuario = {
                id: uuidv4(),
                nome: args.nome,
                idade: args.idade,
                posts: [],
                comentarios:[],
                reacao:[]

            }
            usuarios.push(usuario)
            //console.log(usuario)
            //console.log(usuarios)
            return usuario
        },
        createPost(parent, args, ctx, info){
            const usuario = usuarios.find((usuario) => {
                return usuario.id == args.autor_id
            })
            if (!usuario){
                throw new Error("User not found")
            }
            const post = {
                id: uuidv4(),
                texto: args.texto,
                autor: usuario
            }
            usuario.posts.push(post)
            posts.push(post)
            //console.log(posts)
            //console.log(post)
            //console.log(usuarios)
            return post
        }
    },
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