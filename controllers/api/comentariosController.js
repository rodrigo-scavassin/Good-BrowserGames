import comentarios from "../../models/comentario.js";

const cadastrarComentario = (req, res) => {
  let comentario = new comentarios({
    usuario: req.body.usuario,
    avaliacao: req.body.avaliacao,
    descricao: req.body.descricao,
    jogo: req.body.jogo
  });

  comentario.save((err) => {
    if (err) {
      res
        .status(500)
        .send({ message: `${err.message} - Falha ao cadastrar o comentario` });
    } else {
      res.redirect("/");
    }
  });
};


export default {
  cadastrarComentario
};
