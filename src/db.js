const usuarios = [
    {
        id: '1',
        nome: 'Adol',
        idade: 19
    },
    {
        id: '2',
        nome: 'Asuka',
        idade: 18
    },
    {
        id: '3',
        nome: 'Abdul',
        idade: 18
    }
]
const post = [
    {
        id: '1',
        texto: 'post1',
        comentarios: '1',
        autor: '1'
    }
] 
const comentarios = [
    {
        id: '1',
        texto: 'comentario1',
        autor: '1'
    }
] 
const reacao = [
    {
        id: '1',
        post_id: '1',
        tipo: true,
        autor: '1'
    },
    {
        id: '2',
        post_id: '1',
        tipo: false,
        autor: '2'
    },
    {
        id: '3',
        post_id: '1',
        tipo: true,
        autor: '3'
    }
] 

export default {
    usuarios, post, comentarios, reacao
}