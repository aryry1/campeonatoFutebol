const { deleteJogador } = require("../repositores/jogadores")

async function removejogador(id_jogador) {
    try {

        if (id_jogador) {
            const jogador = await deleteJogador(id_jogador)
            return { message: "Jogador removido com sucesso", status: 200, data: jogador }
        }

        return new Error("Id não correspondente")
    } catch (error) {
        return { message: "Erro ao remover o jogador", status: 400 }
    }
}

module.exports = {
    removejogador
}