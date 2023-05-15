const { adicionaJogador, buscaJogador, listaJogadoresTime } = require("../repositores/jogadores");

async function cadastraJogador(nome, foto, altura, peso, idade, posicao, numero, time) {
    try {

        if (nome && foto && altura && peso && idade && posicao && numero && time) {

            const buffe_foto = (foto.buffer).toString("base64")

            const busca_jogador = await buscaJogador(nome)
            const lista_jogadores = await listaJogadoresTime(time)

            if (busca_jogador != null) {
                return { message: "Jogador já cadastrado", status: 200, data: busca_jogador }
            }

            if (lista_jogadores.length >= 22) {
                return { message: "O time já está completo", status: 400 }
            }


            const add = await adicionaJogador(nome, buffe_foto, altura, peso, idade, posicao, numero, time)
            return { message: "Jogador inserido com sucesso", status: 200, data: add }
        }

        return new Error("Dados inválidos")
    } catch (error) {
        return { message: "Dados inválidos", status: 400 }
    }
}

module.exports = {
    cadastraJogador
}