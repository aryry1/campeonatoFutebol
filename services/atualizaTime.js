const { updateTime } = require("../repositores/times")

async function atualizaInforTime(id_time, nome, escudo, cidade, tecnico, tecnico, site) {
    try {
        if (id_time && nome && escudo && cidade && tecnico && tecnico && site) {
            const time_up = await updateTime(id_time, nome, escudo, cidade, tecnico, site);

            return { message: "Time atualizado com sucesso.", status: 200, data: time_up }
        }

        return new Error("Dados inválidos")
    } catch (error) {
        return { message: "Dados inválidos", status: 400 }
    }
}

module.exports = {
    atualizaInforTime
}