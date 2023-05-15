const { atualizaJogador } = require("../repositores/jogadores");

async function atualizaInforJogador(id_jogador, nome, altura, peso, idade, posicao, numero, foto, time) {
    try {

        if (id_jogador && nome && altura && peso && idade && posicao && numero && foto && time) {

            const jogador_up = await atualizaJogador(id_jogador, nome, altura, peso, idade, posicao, numero, foto, time);

            return { message: "Os dados do jogador foram atualizados com sucesso.", status: 200, data: jogador_up }
        }

        return new Error("Dados inválidos")

    } catch (error) {
        return { message: "Erro na atualização dos dados do jogador" }
    }
}

module.exports = {
    atualizaInforJogador
}