const Query = {
    listAllUsers(parent, args, ctx, info) {
        return ctx.db.usuarios
    },
    listAllPosts(parent, args, ctx, info) {
        return ctx.db.post
    },
    listAllComment(parent, args, ctx, info) {
        return ctx.db.comentarios
    },
    queryReaction(parent, args, ctx, info) {
        return ctx.db.reacao
    }
}

export default Query