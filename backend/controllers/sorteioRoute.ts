import { Request, Response } from "express";
import { geraSorteio } from "../services/sorteioJogos";

export async function sorteioJogos(request: Request, response: Response) {
    try {
        const res = await geraSorteio()

        return res.status === 400 ? response.status(400).json({ message: res.message }) : response.status(200).json({ message: res.message, data: res.data })
    } catch (error) {
        return error
    }
}