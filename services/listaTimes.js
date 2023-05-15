const { buscaTimes, buscaTime } = require("../repositores/times");

async function listaTimes() {
    try {

        const res = await buscaTimes()

        if (res.length > 0) {
            return { message: "Times cadastrados", status: 200, data: res }
        }

        return new Error("Nenhum time cadastrado")

    } catch (error) {
        return { message: "Ainda não tem nenhum time cadastrado", status: 400 }
    }
}

async function buscaTimeNome(nome) {
    try {

        const res = await buscaTime(nome)

        if (res != null) {
            return { message: "Time encontrado", status: 200, data: res }
        }

        return new Error("Time não encontrado")

    } catch (error) {
        return { message: "Ainda não tem nenhum time cadastrado", status: 400 }
    }
}

module.exports = {
    listaTimes,
    buscaTimeNome
}