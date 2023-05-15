const mongoose = require("mongoose")
const Schema = mongoose.Schema

const timeSchema = Schema({
    nome: String,
    escudo: String,
    cidade: String,
    tecnico: String,
    site: String
});

module.exports = mongoose.model("time", timeSchema)