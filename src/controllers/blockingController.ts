import { Request, Response } from 'express';

export async function blockingController(req: Request, res: Response) {
    let counter = 0;
    for (let i = 0; i < 20_000_000_000; i++) {
        counter++;
    }
    res.status(200).send(`result is ${counter}`);
}