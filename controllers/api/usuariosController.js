import usuarios from "../../models/usuario.js";

const listarUsuarios = (req, res) => {
  usuarios.find()
  .populate('jogos', 'titulo')
  .exec((err, usuarios) => {
    res.status(200).json(usuarios);
  });
};

const listarUsuarioPorId = (req, res) => {
  const id = req.params.id;

  usuarios.findById(id)
  .populate('jogos', 'titulo')
  .exec((err, livros) => {
    if (err) {
      res
        .status(400)
        .send({ message: `${err.message} - Id do usuario não localizado.` });
    } else {
      res.status(200).send(livros);
    }
  });
};

const cadastrarUsuario = (req, res) => {
  let usuario = new usuarios({
  nome: req.body.nome,
  sobrenome: req.body.sobrenome,
  email: req.body.email,
  cpf: req.body.cpf,
  nascimento: req.body.nascimento.split('-').reverse().join('/'),
  imagem: req.body.imagem,
  jogos: [],
  administrador: Boolean(req.body.administrador),
  });
  usuario.save((err) => {
    if (err) {
      res
        .status(500)
        .send({ message: `${err.message} - Falha ao cadastrar o usuario` });
    } else {
      res.redirect("/admin/usuarios");
    }
  });
};

const atualizarUsuario = (req, res) => {
  const id = req.params.id;
  req.body.administrador = Boolean(req.body.administrador);

  usuarios.findByIdAndUpdate(id, { $set: req.body }, (err) => {
    if (!err) {
      res.redirect("/admin/usuarios");
    } else {
      res.status(500).send({ message: err.message });
    }
  });
};

const excluirUsuario = (req, res) => {
  const id = req.params.id;

  usuarios.findByIdAndDelete(id, (err) => {
    if (!err) {
      res.redirect("/admin/usuarios");
    } else {
      res.status(500).send({ message: err.message });
    }
  });
};

const listarUsuarioPorCpf = (req, res) => {
  const cpf = req.query.cpf;

  usuarios.find({ cpf: cpf })
  .populate('jogos', 'titulo')
  .exec( {}, (err, usuarios) => {
    if (err) {
      res.status(400).send({ message: `CPF não encontrado` });
    } else {
      res.status(200).send(usuarios);
    }
  });
};



export default {
  listarUsuarios,
  listarUsuarioPorId,
  cadastrarUsuario,
  atualizarUsuario,
  excluirUsuario,
  listarUsuarioPorCpf
};
