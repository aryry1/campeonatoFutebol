import { atualizaJogador } from "../repositores/jogadores";

export async function atualizaInforJogador(id_jogador: string, nome: string, altura: string, peso: string, idade: number, posicao: string, numero: number, foto: string, time: string) {
    try {

        if (id_jogador && nome && altura && peso && idade && posicao && numero && foto && time) {

            const jogador_up = await atualizaJogador(id_jogador, nome, altura, peso, idade, posicao, numero, foto, time);

            return { message: "Os dados do jogador foram atualizados com sucesso.", status: 200, data: jogador_up }
        }

        throw new Error("Dados inválidos")

    } catch (error) {
        return { message: "Erro na atualização dos dados do jogador" }
    }
}