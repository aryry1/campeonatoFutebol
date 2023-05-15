const time = require("../models/times");

async function adicionaTime(nome, escudo, cidade, tecnico, site) {
    try {

        const busca = await buscaTime(nome);

        if (busca != null) {
            console.log("Time já cadastrado")
            return busca
        }

        const novo_time = await time.create({
            nome,
            escudo,
            cidade,
            tecnico,
            site
        });

        return novo_time

    } catch (error) {
        return error
    }
}

async function buscaTime(nome) {
    try {

        const res = await time.findOne({
            nome: nome
        });

        return res

    } catch (error) {
        return error
    }
}

async function updateTime(id_time, nome, escudo, cidade, tecnico, site) {
    try {

        const time_up = await time.updateOne(
            {
                _id: id_time
            },
            {
                nome: nome,
                escudo: escudo,
                cidade: cidade,
                tecnico: tecnico,
                site: site
            }
        );

        const atualizacao = buscaTime(nome)

        return atualizacao

    } catch (error) {
        return error
    }
}

async function buscaTimes() {
    try {
        const times = await time.find();

        return times
    } catch (error) {
        return error
    }
}

async function deleteTime(id) {
    try {

        const del = await time.deleteOne({
            _id: id
        });

        return del

    } catch (error) {
        return error
    }
}

module.exports = {
    adicionaTime,
    buscaTime,
    updateTime,
    buscaTimes,
    deleteTime
}