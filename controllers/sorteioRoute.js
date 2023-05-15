const { geraSorteio } = require("../services/sorteioJogos")

async function sorteioJogos(request, response) {
    try {

        const res = await geraSorteio()

        return res.status === 400 ? response.status(400).json({ message: res.message }) : response.status(200).json({ message: res.message, data: res.data })

    } catch (error) {
        return error
    }
}

module.exports = {
    sorteioJogos
}