import { deleteTime } from "../repositores/times"

export async function removeTime(id_time: string) {
    try {

        if (id_time) {
            const time_del = await deleteTime(id_time)
            return { message: "Time removido com sucesso", status: 200, data: time_del }
        }

        throw new Error("Id não correspondente")

    } catch (error) {
        return { message: "Erro ao remover o time", status: 400 }
    }
}