import time from "../models/times";

export async function adicionaTime(nome: string, escudo: string, cidade: string, tecnico: string, site: string) {
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
}

export async function buscaTime(nome: string) {
    const res = await time.findOne({
        nome: nome
    });

    return res
}

export async function updateTime(id_time: string, nome: string, escudo: string, cidade: string, tecnico: string, site: string) {
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
}

export async function buscaTimes() {
    const times = await time.find();

    return times
}

export async function deleteTime(id: string) {
    const del = await time.deleteOne({
        _id: id
    });

    return del
}
