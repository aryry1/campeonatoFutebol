const { adicionaTime, buscaTimes } = require("../repositores/times")

async function cadastraTime(nome, escudo, cidade, tecnico, site) {
    try {

        if (nome && escudo && cidade && tecnico && site) {

            const buffe_escudo = (escudo.buffer).toString("base64")

            const total_times = await buscaTimes()

            if (total_times.length >= 8) {
                return { message: "A quantidade de times já atingiu o limite", status: 400 }
            }

            const novo_time = await adicionaTime(nome, buffe_escudo, cidade, tecnico, site)

            return { message: "Time inserido com sucesso", status: 200, data: novo_time }
        }

        return new Error("Dados inválidos")

    } catch (error) {
        return { message: "Dados inv´palidos", status: 400 }
    }
}

module.exports = {
    cadastraTime
}