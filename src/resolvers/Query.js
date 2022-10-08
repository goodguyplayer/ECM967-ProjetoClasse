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
        const value = ctx.db.reacao         
        const total = ctx.db.reacao.length                
        var contador = 0         
        for (var i = 0; i < value.length; i++) {             
            contador += value[i].tipo === true ? 1 : 0         
        }         
        var texto = `Positivo = ${((contador /  total) * 100).toFixed(2)}\%, negativo == ${100 - ((contador /  total) * 100).toFixed(2)}\%`
        return texto
    }
}

export default Query