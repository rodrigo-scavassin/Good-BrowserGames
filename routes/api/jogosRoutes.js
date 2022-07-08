import express from "express";
import jogoController from "../../controllers/api/jogosController.js"

const router = express.Router();

router
    .get("/jogos", jogoController.listarJogos)
    .get("/jogos/busca", jogoController.listarJogoPorCategoria)
    .get("/jogos/:id",  jogoController.listarJogoPorId)
    .post("/jogos",  jogoController.cadastrarJogo)
    .put("/jogos/:id",  jogoController.atualizarJogo)
    .delete("/jogos/:id",  jogoController.excluirJogo)

export default router;