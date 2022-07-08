import express from "express";
import comentarioController from "../../controllers/api/comentariosController.js"

const router = express.Router();

router

    .post("/comentarios", comentarioController.cadastrarComentario)

export default router;