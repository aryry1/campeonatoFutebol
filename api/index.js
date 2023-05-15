const mongoose = require('mongoose')
const express = require('express')
const app = express()
const path = require('path');
const dotenv = require('dotenv').config();
const cors = require('cors')
const multer = require('multer')
const upload = multer()

const { cadastrarNovoJogador, buscaTodosJogadores, listaJogadoresTime, atualizaJogador, removeJogadorById } = require("../controllers/jogadorRouter")
const { cadastraNovoTime, atualizaTime, buscaTimes, buscaTimeByNome, removeTimeById } = require("../controllers/timeRouter")
const { sorteioJogos } = require("../controllers/sorteioRoute")

mongoose.connect(process.env.DATABASE_CONNECT)

app.use(express.json())
app.use(cors())

app.use(function (request, response, next) {
    if (request.query.token != process.env.TOKEN_API) {
        response.statusCode = 401;
        response.json({ message: "Chave API inválida" })
    } else {
        next()
    }
})


app.post("/jogador/cadastro", upload.single("foto"), cadastrarNovoJogador)
app.get("/jogadores", buscaTodosJogadores)
app.get("/jogadores/time", listaJogadoresTime)
app.patch("/jogador/atualizacao", atualizaJogador)
app.delete("/jogador/remove", removeJogadorById)

app.post("/time/cadastro", upload.single("escudo"), cadastraNovoTime)
app.patch("/time/atualizacao", atualizaTime)
app.get("/times/lista", buscaTimes)
app.get("/time/busca", buscaTimeByNome)
app.delete("/time/remove", removeTimeById)

app.get("/sorteio_jogos", sorteioJogos)

app.listen(process.env.PORT || 3033, () => {
    console.log("Service runnig in port ", process.env.PORT)
})