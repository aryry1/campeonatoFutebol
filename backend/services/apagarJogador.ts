import { deleteJogador } from "../repositores/jogadores"

export async function removejogador(id_jogador: string) {
    try {

        if (id_jogador) {
            const jogador = await deleteJogador(id_jogador)
            return { message: "Jogador removido com sucesso", status: 200, data: jogador }
        }

        throw new Error("Id não correspondente")
    } catch (error) {
        return { message: "Erro ao remover o jogador", status: 400 }
    }
}
