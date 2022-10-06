const Usuario = {
    post(parent, args, ctx, info) {
        return ctx.db.post.filter(post => post.autor === parent.id)
    },
    comentarios(parent, args, ctx, info) {
        return ctx.db.comentarios.filter(comentario => comentario.autor === parent.id)
    },
    reacao(parent, args, ctx, info) {
        return ctx.db.reacao.filter(reacao => reacao.autor === parent.id)
    }
}

export default Usuario