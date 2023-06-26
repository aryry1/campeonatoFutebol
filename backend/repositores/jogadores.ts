import jogador from "../models/jogadores"

export async function adicionaJogador(nome: string, foto: string, altura: string, peso: string, idade: number, posicao: string, numero: number, time: string) {
    const novo_jogodor = await jogador.create({
        nome,
        foto,
        altura,
        peso,
        idade,
        posicao,
        numero,
        time
    });

    return novo_jogodor
}

export async function buscaJogador(nome: string) {

    return await jogador.findOne({
        nome: nome
    })
}

export async function listaJogadores() {

    const jogadores = jogador.find();
    return jogadores
}

export async function listaJogadoresTime(id_time: string) {

    const jogadores = await jogador.find({
        time: id_time
    })

    return jogadores
}

export async function atualizaJogador(id_jogador: string, nome: string, altura: string, peso: string, idade: number, posicao: string, numero: number, foto: string, time: string) {
    const jogador_up = await jogador.updateOne(
        {
            _id: id_jogador
        },
        {
            nome: nome,
            altura: altura,
            peso: peso,
            idade: idade,
            posicao: posicao,
            numero: numero,
            foto: foto,
            time: time
        }
    );

    const atualizacao = await buscaJogador(nome)

    return atualizacao
}

export async function deleteJogador(id: string) {
    const del = await jogador.deleteOne({
        _id: id
    })

    return del
}
