const { Double } = require("mongodb");
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const jogadoresSchema = Schema({
    nome: String,
    foto: String,
    altura: String,
    peso: String,
    idade: Number,
    posicao: String,
    numero: Number,
    time: String
});

module.exports = mongoose.model("jogador", jogadoresSchema)