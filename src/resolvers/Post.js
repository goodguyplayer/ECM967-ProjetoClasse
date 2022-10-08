const Post = {
    autor(parent, args, ctx, info) {
        return ctx.db.usuarios.find(u => u.id === parent.autor)
    },
    comentarios(parent, args, ctx, info) {
        return ctx.db.comentarios.filter(comentario => comentario.autor === parent.id)
    },
    reacao(parent, args, ctx, info) {
        return ctx.db.reacao.filter(reacao => reacao.autor === parent.id)
    }
}

export default Post