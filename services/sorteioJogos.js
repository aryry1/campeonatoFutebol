const { buscaTimes } = require("../repositores/times")

async function geraSorteio() {
    try {

        const times = await buscaTimes()

        if (times.length != 8) {
            return new Error("Quantidade de times insuficientes para gerar os jogos. Cadastre mais times no campeonato")
        }

        let sorteados = []
        for (let i = 0; i < times.length; i++) {
            let time_index = Math.ceil(Math.random() * i);

            while (sorteados.indexOf(times[time_index].nome) >= 0) {
                time_index = Math.ceil(Math.random() * i);
            }

            sorteados.push(times[time_index].nome)
        }

        let jogos = {
            "jogo_1": {
                "time_A": sorteados[0],
                "time_B": sorteados[1]
            },
            "jogo_2": {
                "time_A": sorteados[2],
                "time_B": sorteados[3]
            },
            "jogo_3": {
                "time_A": sorteados[4],
                "time_B": sorteados[5]
            },
            "jogo_4": {
                "time_A": sorteados[6],
                "time_B": sorteados[7]
            }
        }

        return { message: "Jogos sorteados", status: 200, data: jogos }

    } catch (error) {
        return { message: "Erro ao gerar os jogos", status: 400 }
    }
}

module.exports = {
    geraSorteio
}