import express from "express"
import jogos from "./api/jogosRoutes.js"
import usuarios from "./api/usuariosRoutes.js"
import categorias from "./api/categoriasRoutes.js"
import comentarios from "./api/comentariosRoutes.js"
import auth from "./api/authRoutes.js"
import admin from "./web/adminRoutes.js"
import home from "./web/homeRoutes.js"


const routes = (app) => {

    app.use(
        express.json(),
        auth,
        jogos,
        usuarios,
        categorias,
        comentarios,
        admin,
        home
    )
}

export default routes