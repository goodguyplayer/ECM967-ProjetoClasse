const Reacao = {
    autor(parent, args, ctx, info) {
        return ctx.db.usuarios.find(u => u.id === parent.autor)
    }
}

export default Reacao