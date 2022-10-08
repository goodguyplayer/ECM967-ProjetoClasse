const Comentario = {
    post(parent, args, ctx, info) {
        return ctx.db.post.find(post => post.id === parent.post)
    },
    autor(parent, args, ctx, info) {
        return ctx.db.usuarios.find(u => u.id === parent.autor)
    }
}

export default Comentario