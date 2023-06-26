import mongoose from "mongoose"

const timeSchema = new mongoose.Schema({
    nome: String,
    escudo: String,
    cidade: String,
    tecnico: String,
    site: String
});

export default mongoose.model("time", timeSchema)