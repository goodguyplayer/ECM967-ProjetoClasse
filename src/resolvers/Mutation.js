import { v4 as uuidv4 } from 'uuid'

const Mutation = {
    createUser(parent, args, ctx, info) {
        const usuario = {
            id: uuidv4(),
            nome: args.nome,
            idade: args.idade,
        }
        ctx.db.usuarios.push(usuario)
        return usuario
    },
    createPost(parent, args, ctx, info) {
        const usuario = ctx.db.usuarios.find((usuario) => {
            return usuario.id == args.autor_id
        })
        if (!usuario) {
            throw new Error("User not found")
        }
        const post = {
            id: uuidv4(),
            texto: args.texto,
            autor: usuario,
        }
        usuario.post.push(post)
        return post
    },
    createComment(parent, args, ctx, info) {
        const post = ctx.db.post.find((post) => {
            return post.id == args.post_id
        })
        if (!post) {
            throw new Error("Post not found")
        }

        const usuario = ctx.db.usuarios.find((usuario) => {
            return usuario.id == args.autor_id
        })
        if (!usuario) {
            throw new Error("User not found")
        }

        const comment = {
            id: uuidv4(),
            texto: args.texto,
            autor: usuario,
            post: post
        }

        usuario.comentarios.push(comment)
        post.comentarios.push(comment)
        comentarios.push(comment)
        return comment
    },
    createReaction(parent, args, ctx, info) {
        const post = ctx.db.post.find((post) => {
            return post.id == args.post_id
        })
        if (!post) {
            throw new Error("Post not found")
        }

        const usuario = ctx.db.usuarios.find((usuario) => {
            return usuario.id == args.autor_id
        })
        if (!usuario) {
            throw new Error("User not found")
        }

        const userreacted = ctx.db.post.find((usuario) => {
            return usuario.id == args.autor_id
        })
        if (!userreacted) {
            const reaction = {
                id: uuidv4(),
                tipo: args.reaction,
                autor: usuario.id
            }

            usuario.reacao.push(reaction)
            post.reacao.push(reaction)
            reacao.push(reaction)
            return reaction

        } else {
            throw new Error("User has reacted before")
        }
    }
}

export default Mutation