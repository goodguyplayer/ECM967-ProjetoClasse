import {usuarios, posts, comentarios} from './db'

const Query = {
    listAllUsers() {
        return usuarios
    },
    listAllPosts() {
        return posts
    },
    listAllComment() {
        return comentarios
    },
}

export default Query