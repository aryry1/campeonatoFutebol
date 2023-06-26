import 'dotenv/config';
import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import multer from 'multer';
import { cadastrarNovoJogadorRouter, buscaTodosJogadoresRouter, listaJogadoresTimeRouter, atualizaJogadorRouter, removeJogadorByIdRouter } from "./controllers/jogadorRouter"
import { cadastraNovoTime, atualizaTime, buscaTimes, buscaTimeByNome, removeTimeById } from "./controllers/timeRouter"
import { sorteioJogos } from "./controllers/sorteioRoute"

const app = express()
const upload = multer()

if (!process.env.DATABASE_CONNECT){
    throw new Error("Variável ambiente 'DATABASE_CONNECT' não configurada")
}

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


app.post("/jogador/cadastro", upload.single("foto"), cadastrarNovoJogadorRouter)
app.get("/jogadores", buscaTodosJogadoresRouter)
app.get("/jogadores/time/:id", listaJogadoresTimeRouter)
app.patch("/jogador/atualizacao/:id", atualizaJogadorRouter)
app.delete("/jogador/remove/:id", removeJogadorByIdRouter)

app.post("/time/cadastro", upload.single("escudo"), cadastraNovoTime)
app.patch("/time/atualizacao/:id", atualizaTime)
app.get("/times/lista", buscaTimes)
app.get("/time/busca", buscaTimeByNome)
app.delete("/time/remove/:id", removeTimeById)

app.get("/sorteio_jogos", sorteioJogos)

app.listen(process.env.PORT, () => {
    console.log("Service runnig in port ", process.env.PORT)
})

export default app
