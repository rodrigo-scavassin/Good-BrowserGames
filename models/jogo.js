import mongoose from "mongoose";

const jogoSchema = new mongoose.Schema({
  id: { type: String },
  titulo: { type: String, required: true },
  categoria: { type: mongoose.Schema.Types.ObjectId, ref: 'categorias', required: true },
  descricao: { type: String, required: false },
  url: { type: String, required: true },
  imagem: { type: String, required: true }
},
  {
    versionKey: false
  });

const jogos = mongoose.model("jogos", jogoSchema);

export default jogos;
