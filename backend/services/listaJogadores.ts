import { listaJogadores, listaJogadoresTime } from "../repositores/jogadores";

export async function buscaJogadores() {
    return await listaJogadores()
}

export async function buscajogadoresByTime(id_time: string) {
    try {

        const jogadores = await listaJogadoresTime(id_time);

        if (jogadores != null) {
            return { message: "Jogadores associados", status: 200, data: jogadores }
        }

        throw new Error("Nenhum jogador cadastrado nesse time")

    } catch (error) {
        return { message: "Nenhum jogador cadastrado nesse time", status: 400 }
    }
}