import { Request, Response } from 'express';
import { Worker } from 'worker_threads';

export async function blockingController(req: Request, res: Response) {
    const worker = new Worker("./src/services/worker.ts");
    worker.on("message", (counter) => {
        res.status(200).send(`result is ${counter}`);
    });
    worker.on("error", (msg) => {
        res.status(404).send(`An error occurred: ${msg}`);
    });
    // await worker.terminate();
}