import jogos from "../../models/jogo.js";
import categorias from "../../models/categoria.js";
import usuarios from "../../models/usuario.js";
import comentarios from "../../models/comentario.js";

const dashboard = (req,res) => {
  jogos.find()
  .populate('categoria')
  .then((result1) => {
    usuarios.find().then((result2) => {
      categorias.find().then((result3) => {
        comentarios.find().then((result4) => {

        let jogosOrdenadosPorAvaliacao = ordenaJogoPorAvaliacao(result1, result4);
        let jogosOrdenadosPorQuantidadeAvaliacao = ordenaJogoPorQuantidadeAvaliacao(result1, result4);
        let usuariosOrdenadosPorQuantidadeAvaliacao = ordenaUsuarioPorQuantidadeAvaliacao(result2, result4);
        let categoriasOrdenadasPorQuantidadeAvaliacao = ordenaCategoriaPorQuantidadeAvaliacao(result3, result1);
        


      res.render("admin/index", {
        jogos1: jogosOrdenadosPorQuantidadeAvaliacao,
        jogos2: jogosOrdenadosPorAvaliacao,
        usuarios: usuariosOrdenadosPorQuantidadeAvaliacao,
        categorias: categoriasOrdenadasPorQuantidadeAvaliacao
      });
    });
  });
})
  })
};

// READ

const adminObterJogos = (req, res) => {
  jogos.find()
  .populate('categoria')
  .then((result) => {
    res.render("admin/jogos", {
      jogos: result,
    });
  });
};

const adminObterCategorias = (req, res) => {
    categorias.find().then((result) => {
      res.render("admin/categorias", {
        categorias: result,
      });
    });
  };

const adminObterUsuarios = (req, res) => {
  usuarios.find().then((result) => {
    res.render("admin/usuarios", {
      usuarios: result,
    });
  });
};

// UPDATE CRUD


const adminEditarJogos = (req,res) => {
    const id = req.params.id;
    categorias.find().then((categorias) => {
    jogos.findById(id).then((jogo) => {
        res.render("admin/jogos_edit", {
          jogo: jogo,
          categorias: categorias
        })
      })
    }
    )
}

const adminEditarCategorias = (req,res) => {
    const id = req.params.id;

    categorias.findById(id).then((result) => {
        res.render("admin/categorias_edit", {
          categoria: result
        });
      });
}

const adminEditarUsuarios = (req,res) => {
    const id = req.params.id;

    usuarios.findById(id).then((result) => {
        res.render("admin/usuarios_edit", {
          usuario: result
        });
      });
}

// CREATE CRUD

const adminCriarUsuarios = (req,res) => {

  res.render("admin/usuarios_create");
}

const adminCriarJogos = (req,res) => {
  categorias.find().then((result) => {
    res.render("admin/jogos_create", {
      categorias: result,
    });
  });
};

const adminCriarCategorias = (req,res) => {
res.render("admin/categorias_create");
}


// FUNÇÕES PARA ORDENAÇÃO DOS JOGOS SEGUNDO OS CRITÉRIOS DO RELATÓRIO SOLICITADOS PELO PROFESSOR

// Array de jogos mais bem avaliados

function ordenaJogoPorAvaliacao(arrayJogos, arrayComentarios) {
  const novoArray = [...arrayJogos];
  let qtd_comentarios = 0;
  let nota = 0;
  let media = 0;
  const arrayQuantidades = [];
  novoArray.forEach(jogo => {
    arrayComentarios.forEach(comentario=> {
      if(String(comentario.jogo) == String(jogo._id)){
        qtd_comentarios += 1;
        nota += comentario.avaliacao;
      }
    })
    media = nota/qtd_comentarios
    arrayQuantidades.push(media)
    qtd_comentarios = 0;
    nota = 0;
    media = 0;
  });

  arrayQuantidades.forEach((media, index)=>{
    novoArray[index].avaliacao = media
  })
  novoArray.sort((a, b) => {
    return a.avaliacao - b.avaliacao;
});
  novoArray.reverse();
  const novoArray5 = novoArray.slice(0, 5)
  return novoArray5;
}


// Array de jogos de maior número de avaliações

function ordenaJogoPorQuantidadeAvaliacao(arrayJogos, arrayComentarios) {
  const novoArray = [...arrayJogos];
  let qtd_comentarios = 0;
  const arrayQuantidades = [];
  novoArray.forEach(jogo => {
    arrayComentarios.forEach(comentario=> {
      if(String(comentario.jogo) == String(jogo._id)){
        qtd_comentarios += 1;
      }
    })
    arrayQuantidades.push(qtd_comentarios)
    qtd_comentarios = 0;
  });

  arrayQuantidades.forEach((qtd, index)=>{
    novoArray[index].qtd_avaliacoes = qtd
  })
  novoArray.sort((a, b) => {
    return a.qtd_avaliacoes - b.qtd_avaliacoes;
});
  novoArray.reverse();
  const novoArray5 = novoArray.slice(0, 5)
  return novoArray5;
}


// Array de usuarios de maior número de avaliações

function ordenaUsuarioPorQuantidadeAvaliacao(arrayUsuarios, arrayComentarios) {
  const novoArray = [...arrayUsuarios];
  let qtd_comentarios = 0;
  const arrayQuantidades = [];
  novoArray.forEach(usuario => {
    arrayComentarios.forEach(comentario=> {
      if(String(comentario.usuario) == String(usuario._id)){
        qtd_comentarios += 1;
      }
    })
    arrayQuantidades.push(qtd_comentarios)
    qtd_comentarios = 0;
  });

  arrayQuantidades.forEach((qtd, index)=>{
    novoArray[index].qtd_avaliacoes = qtd
  })
  novoArray.sort((a, b) => {
    return a.qtd_avaliacoes - b.qtd_avaliacoes;
});
  novoArray.reverse();
  const novoArray5 = novoArray.slice(0, 5)
  return novoArray5;
}

// Array de categorias de maior número de avaliações

function ordenaCategoriaPorQuantidadeAvaliacao(arrayCategorias, arrayJogos) {
  const novoArray = [...arrayCategorias];
  let qtd_comentarios = 0;
  const arrayQuantidades = [];
  novoArray.forEach(categoria => {
    arrayJogos.forEach(jogo=> {
      if(String(jogo.categoria._id) == String(categoria._id)){
        qtd_comentarios += jogo.qtd_avaliacoes;
      }
    })
    arrayQuantidades.push(qtd_comentarios)
    qtd_comentarios = 0;
  });

  arrayQuantidades.forEach((qtd, index)=>{
    novoArray[index].qtd_avaliacoes = qtd
  })
  novoArray.sort((a, b) => {
    return a.qtd_avaliacoes - b.qtd_avaliacoes;
});
  novoArray.reverse();
  const novoArray3 = novoArray.slice(0, 3)
  return novoArray3;
}


export default {
dashboard,
adminObterJogos,
adminObterCategorias,
adminObterUsuarios,
adminEditarJogos,
adminEditarCategorias,
adminEditarUsuarios,
adminCriarCategorias,
adminCriarJogos,
adminCriarUsuarios
};

