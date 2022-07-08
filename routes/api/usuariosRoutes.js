import express from "express";
import usuarioController from "../../controllers/api/usuariosController.js"

const router = express.Router();

router
    .get("/usuarios", usuarioController.listarUsuarios)
    .get("/usuarios/busca", usuarioController.listarUsuarioPorCpf)
    .get("/usuarios/:id",  usuarioController.listarUsuarioPorId)
    .post("/usuarios",  usuarioController.cadastrarUsuario)
    .put("/usuarios/:id",  usuarioController.atualizarUsuario)
    .delete("/usuarios/:id",  usuarioController.excluirUsuario)

export default router;