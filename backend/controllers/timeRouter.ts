import { Request, Response } from "express";
import { cadastraTime } from "../services/cadastraTime";
import { atualizaInforTime } from "../services/atualizaTime";
import { buscaTimeNome, listaTimes } from "../services/listaTimes";
import { removeTime } from "../services/apagarTime";

export async function cadastraNovoTime(request: Request, response: Response) {
    try {
        const {
            nome,
            cidade,
            tecnico,
            site
        } = request.body

        const escudo = request.file

        const add = await cadastraTime(nome, escudo, cidade, tecnico, site);

        return add.status === 400 ? response.status(400).json({ message: add.message }) : response.status(200).json({ message: add.message, data: add.data })

    } catch (error) {
        return error
    }
}

export async function atualizaTime(request: Request, response: Response) {
    try {

        const { id } = request.params
        const {
            nome,
            escudo,
            cidade,
            tecnico,
            site
        } = request.body

        const res = await atualizaInforTime(id, nome, escudo, cidade, tecnico, site)

        return res.status === 400 ? response.status(400).json({ message: res.message }) : response.status(200).json({ message: res.message, data: res.data })

    } catch (error) {
        return error
    }
}

export async function buscaTimes(request: Request, response: Response) {
    try {

        const res = await listaTimes()

        return res.status === 400 ? response.status(400).json({ message: res.message }) : response.status(200).json({ message: res.message, data: res.data })

    } catch (error) {
        return error
    }
}

export async function buscaTimeByNome(request: Request, response: Response) {
    try {

        const { nome } = request.query

        const res = await buscaTimeNome(nome?.toString() || "")

        return res.status === 400 ? response.status(400).json({ message: res.message }) : response.status(200).json({ message: res.message, data: res.data })

    } catch (error) {
        return error
    }
}

export async function removeTimeById(request: Request, response: Response) {
    try {

        const { id } = request.params

        const res = await removeTime(id)

        return res.status === 400 ? response.status(400).json({ message: res.message }) : response.status(200).json({ message: res.message, data: res.data })

    } catch (error) {
        return error
    }
}
