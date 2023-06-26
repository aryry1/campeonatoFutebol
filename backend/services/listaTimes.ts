import { buscaTime, buscaTimes } from "../repositores/times"

export async function listaTimes() {
    try {

        const res = await buscaTimes()

        if (res.length > 0) {
            return { message: "Times cadastrados", status: 200, data: res }
        }

        throw new Error("Nenhum time cadastrado")

    } catch (error) {
        return { message: "Ainda não tem nenhum time cadastrado", status: 400 }
    }
}

export async function buscaTimeNome(nome: string) {
    try {

        const res = await buscaTime(nome)

        if (res != null) {
            return { message: "Time encontrado", status: 200, data: res }
        }

        throw new Error("Time não encontrado")

    } catch (error) {
        return { message: "Ainda não tem nenhum time cadastrado", status: 400 }
    }
}