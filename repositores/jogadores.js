const jogador = require("../models/jogadores")

async function adicionaJogador(nome, foto, altura, peso, idade, posicao, numero, time) {
    try {

        const novo_jogodor = await jogador.create({
            nome,
            foto,
            altura,
            peso,
            idade,
            posicao,
            numero,
            time
        });

        return novo_jogodor

    } catch (error) {
        console.log(error)
        return error
    }
}

async function buscaJogador(nome) {
    try {
        return await jogador.findOne({
            nome: nome
        })
    } catch (error) {
        return error
    }
}

async function listaJogadores() {
    try {
        const jogadores = jogador.find();
        return jogadores
    } catch (error) {
        return error
    }
}

async function listaJogadoresTime(id_time) {
    try {
        const jogadores = await jogador.find({
            time: id_time
        })

        return jogadores
    } catch (error) {
        return error
    }
}

async function atualizaJogador(id_jogador, nome, altura, peso, idade, posicao, numero, foto, time) {
    try {

        const jogador_up = await jogador.updateOne(
            {
                _id: id_jogador
            },
            {
                nome: nome,
                altura: altura,
                peso: peso,
                idade: idade,
                posicao: posicao,
                numero: numero,
                foto: foto,
                time: time
            }
        );

        const atualizacao = await buscaJogador(nome)

        return atualizacao

    } catch (error) {
        return error
    }
}

async function deleteJogador(id) {
    try {

        const del = await jogador.deleteOne({
            _id: id
        })

        return del

    } catch (error) {
        return error
    }
}

module.exports = {
    adicionaJogador,
    listaJogadores,
    listaJogadoresTime,
    buscaJogador,
    atualizaJogador,
    deleteJogador
}