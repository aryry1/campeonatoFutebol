import { Request, Response } from "express";

import { cadastraJogador } from "../services/cadastraJogador"
import { buscaJogadores, buscajogadoresByTime } from "../services/listaJogadores"
import { atualizaInforJogador } from "../services/atualizaJogador"
import { removejogador } from "../services/apagarJogador"

export async function cadastrarNovoJogadorRouter(request: Request, response: Response) {
    try {
        const {
            nome,
            peso,
            altura,
            idade,
            posicao,
            numero,
            time
        } = request.body

        const foto = request.file

        const res = await cadastraJogador(nome, foto, peso, altura, idade, posicao, numero, time)

        return res.status === 400 ? response.status(400).json({ message: res.message }) : response.status(200).json({ message: res.message, data: res.data })

    } catch (error) {
        return error
    }
}

export async function buscaTodosJogadoresRouter(request: Request, response: Response) {
    try {
        const res = await buscaJogadores()

        return response.json(res)

    } catch (error) {
        return error
    }
}

export async function listaJogadoresTimeRouter(request: Request, response: Response) {
    try {

        const { id } = request.params

        const res = await buscajogadoresByTime(id)

        return res.status === 400 ? response.status(400).json({ message: res.message }) : response.status(200).json({ message: res.message, data: res.data })

    } catch (error) {
        return error
    }
}

export async function atualizaJogadorRouter(request: Request, response: Response) {
    try {
        const { id } = request.params

        const {
            nome,
            foto,
            peso,
            altura,
            idade,
            posicao,
            numero,
            time
        } = request.body

        const res = await atualizaInforJogador(id, nome, altura, peso, idade, posicao, numero, foto, time)

        return res.status === 400 ? response.status(400).json({ message: res.message }) : response.status(200).json({ message: res.message, data: res.data })

    } catch (error) {
        return error
    }
}

export async function removeJogadorByIdRouter(request: Request, response: Response) {
    try {

        const { id } = request.params

        const res = await removejogador(id)

        return res.status === 400 ? response.status(400).json({ message: res.message }) : response.status(200).json({ message: res.message, data: res.data })

    } catch (error) {
        return error
    }
}
