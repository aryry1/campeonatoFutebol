const { cadastraTime } = require("../services/cadastraTime");
const { atualizaInforTime } = require("../services/atualizaTime")
const { listaTimes, buscaTimeNome } = require("../services/listaTimes")
const { removeTime } = require("../services/apagarTime")

async function cadastraNovoTime(request, response) {
    try {
        const {
            nome,
            cidade,
            tecnico,
            site
        } = request.body

        const escudo = request.file

        const add = await cadastraTime(nome, escudo, cidade, tecnico, site);

        return add.status === 400 ? response.status(400).json({ message: add.message }) : response.status(200).json({ message: add.message, data: add.data })

    } catch (error) {
        return error
    }
}

async function atualizaTime(request, response) {
    try {

        const {
            id,
            nome,
            escudo,
            cidade,
            tecnico,
            site
        } = request.body

        const res = await atualizaInforTime(id, nome, escudo, cidade, tecnico, tecnico, site)

        return res.status === 400 ? response.status(400).json({ message: res.message }) : response.status(200).json({ message: res.message, data: res.data })

    } catch (error) {
        return error
    }
}

async function buscaTimes(request, response) {
    try {

        const res = await listaTimes()

        return res.status === 400 ? response.status(400).json({ message: res.message }) : response.status(200).json({ message: res.message, data: res.data })

    } catch (error) {
        return error
    }
}

async function buscaTimeByNome(request, response) {
    try {

        const { nome } = request.query

        const res = await buscaTimeNome(nome)

        return res.status === 400 ? response.status(400).json({ message: res.message }) : response.status(200).json({ message: res.message, data: res.data })

    } catch (error) {
        return error
    }
}

async function removeTimeById(request, response) {
    try {

        const { id } = request.query

        const res = await removeTime(id)

        return res.status === 400 ? response.status(400).json({ message: res.message }) : response.status(200).json({ message: res.message, data: res.data })

    } catch (error) {
        return error
    }
}

module.exports = {
    cadastraNovoTime,
    atualizaTime,
    buscaTimes,
    buscaTimeByNome,
    removeTimeById
}