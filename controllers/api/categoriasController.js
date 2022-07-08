import categorias from "../../models/categoria.js";


const listarCategorias = (req, res) => {
  categorias.find((err, categorias) => {
    res.status(200).json(categorias);
  });
};

const listarCategoriaPorId = (req, res) => {
  const id = req.params.id;

  categorias.findById(id, (err, jogos) => {
    if (err) {
      res
        .status(400)
        .send({ message: `${err.message} - Id da categoria não localizado.` });
    } else {
      res.status(200).send(jogos);
    }
  });
};

const cadastrarCategoria = (req, res) => {
  let categoria = new categorias(req.body);
  categoria.save((err) => {
    if (err) {
      res
        .status(500)
        .send({ message: `${err.message} - Falha ao cadastrar a categoria` });
    } else {
      res.redirect('/admin/categorias')
    }
  });
};

const atualizarCategoria = (req, res) => {
  const id = req.params.id;

  categorias.findByIdAndUpdate(id, { $set: req.body }, {new: true}, (err, doc) => {
    if (!err) {
      res.redirect('/admin/categorias')
    } else {
      res.status(500).send({ message: err.message });
    }
  });
};

const excluirCategoria = (req, res) => {
  const id = req.params.id;

  categorias.findByIdAndDelete(id, (err) => {
    if (!err) {
      res.redirect('/admin/categorias')
    } else {
      res.status(500).send({ message: err.message });
    }
  });
};


export default {
  listarCategorias,
  listarCategoriaPorId,
  cadastrarCategoria,
  atualizarCategoria,
  excluirCategoria
};
