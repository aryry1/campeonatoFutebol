const { cadastraJogador } = require("../services/cadastraJogador")
const { buscaJogadores, buscajogadoresByTime } = require("../services/listaJogadores")
const { atualizaInforJogador } = require("../services/atualizaJogador")
const { removejogador } = require("../services/apagarJogador")

async function cadastrarNovoJogador(request, response) {
    try {
        const {
            nome,
            peso,
            altura,
            idade,
            posicao,
            numero,
            time
        } = request.body

        const foto = request.file

        const res = await cadastraJogador(nome, foto, peso, altura, idade, posicao, numero, time)

        return res.status === 400 ? response.status(400).json({ message: res.message }) : response.status(200).json({ message: res.message, data: res.data })

    } catch (error) {
        return error
    }
}

async function buscaTodosJogadores(request, response) {
    try {
        const res = await buscaJogadores()

        return response.json(res)

    } catch (error) {
        return error
    }
}

async function listaJogadoresTime(request, response) {
    try {

        const { id } = request.query

        const res = await buscajogadoresByTime(id)

        return res.status === 400 ? response.status(400).json({ message: res.message }) : response.status(200).json({ message: res.message, data: res.data })

    } catch (error) {
        return error
    }
}

async function atualizaJogador(request, response) {
    try {

        const {
            id,
            nome,
            foto,
            peso,
            altura,
            idade,
            posicao,
            numero,
            time
        } = request.body

        const res = await atualizaInforJogador(id, nome, altura, peso, idade, posicao, numero, foto, time)

        return res.status === 400 ? response.status(400).json({ message: res.message }) : response.status(200).json({ message: res.message, data: res.data })

    } catch (error) {
        return error
    }
}

async function removeJogadorById(request, response) {
    try {

        const { id } = request.query

        const res = await removejogador(id)

        return res.status === 400 ? response.status(400).json({ message: res.message }) : response.status(200).json({ message: res.message, data: res.data })

    } catch (error) {
        return error
    }
}

module.exports = {
    cadastrarNovoJogador,
    buscaTodosJogadores,
    listaJogadoresTime,
    atualizaJogador,
    removeJogadorById
}