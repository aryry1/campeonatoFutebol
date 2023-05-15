const { deleteTime } = require("../repositores/times");

async function removeTime(id_time) {
    try {

        if (id_time) {
            const time_del = await deleteTime(id_time)
            return { message: "Time removido com sucesso", status: 200, data: time_del }
        }

        return new Error("Id não correspondente")

    } catch (error) {
        return { message: "Erro ao remover o time", status: 400 }
    }
}

module.exports = {
    removeTime
}