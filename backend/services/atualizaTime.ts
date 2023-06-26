import { updateTime } from "../repositores/times";

export async function atualizaInforTime(id_time: string, nome: string, escudo: string, cidade: string, tecnico: string, site: string) {
    try {
        if (id_time && nome && escudo && cidade && tecnico && site) {
            const time_up = await updateTime(id_time, nome, escudo, cidade, tecnico, site);

            return { message: "Time atualizado com sucesso.", status: 200, data: time_up }
        }

        throw new Error("Dados inválidos")
    } catch (error) {
        return { message: "Dados inválidos", status: 400 }
    }
}