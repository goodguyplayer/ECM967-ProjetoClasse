const Reacao = {
    autor(parent, args, ctx, info) {
        return ctx.db.usuarios.find(u => u.id === parent.autor)
    },
    post(parent, args, ctx, info) {
        return ctx.db.post.find(u => u.id === parent.post_id)
    }
}

export default Reacao