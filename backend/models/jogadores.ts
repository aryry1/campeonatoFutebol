import mongoose from "mongoose"

const jogadoresSchema = new mongoose.Schema({
    nome: String,
    foto: String,
    altura: String,
    peso: String,
    idade: Number,
    posicao: String,
    numero: Number,
    time: String
});

export default mongoose.model("jogador", jogadoresSchema)