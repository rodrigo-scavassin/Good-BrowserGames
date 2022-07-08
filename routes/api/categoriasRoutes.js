import express from "express";
import bodyParser from "body-parser"
import categoriaController from "../../controllers/api/categoriasController.js"
 
const router = express.Router();
const jsonParser = bodyParser.json()
router.use(jsonParser);


router
    .get("/categorias", jsonParser, categoriaController.listarCategorias)
    .get("/categorias/:id", jsonParser, categoriaController.listarCategoriaPorId)
    .post("/categorias", jsonParser, categoriaController.cadastrarCategoria)
    .put("/categorias/:id", jsonParser, categoriaController.atualizarCategoria)
    .delete("/categorias/:id", jsonParser, categoriaController.excluirCategoria)


export default router;