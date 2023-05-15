const { listaJogadores, listaJogadoresTime } = require("../repositores/jogadores");

async function buscaJogadores() {
    try {

        return await listaJogadores()

    } catch (error) {
        return error
    }
}

async function buscajogadoresByTime(id_time) {
    try {

        const jogadores = await listaJogadoresTime(id_time);

        if (jogadores != null) {
            return { message: "Jogadores associados", status: 200, data: jogadores }
        }

        return new Error("Nenhum jogador cadastrado nesse time")

    } catch (error) {
        return { message: "Nenhum jogador cadastrado nesse time", status: 400 }
    }
}

module.exports = {
    buscaJogadores,
    buscajogadoresByTime
}