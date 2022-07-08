import mongoose from "mongoose";

const comentarioSchema = new mongoose.Schema({
  id: { type: String },
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'usuarios' },
  avaliacao: { type: Number },
  descricao: { type: String },
  jogo: { type: mongoose.Schema.Types.ObjectId, ref: 'jogos' }
},
  {
    versionKey: false
  });

const comentarios = mongoose.model("comentarios", comentarioSchema);

export default comentarios;
