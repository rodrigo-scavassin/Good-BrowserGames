import mongoose from "mongoose";
 
const usuarioSchema = new mongoose.Schema({
  id: { type: String },
  nome: { type: String, required: true },
  sobrenome: { type: String, required: true },
  email: { type: String, required: true },
  cpf: { type: String, required: true },
  nascimento: { type: String, required: true },
  passwordHash: {type: String, requiered: false}, //mudar para true quando adicionar no administrativo
  imagem: { type: String, required: false },
  jogos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'jogos'}],
  administrador: { type: Boolean, required: true },
  qtd_avaliacoes: { type: Number },
},
{
    versionKey: false
});

const usuarios = mongoose.model("usuarios", usuarioSchema);

export default usuarios;
