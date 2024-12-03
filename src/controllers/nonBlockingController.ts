import { Request, Response } from "express";


export async function nonBlockingController(req: Request, res: Response) {
    res.status(200).json({
        message : "This page is non-blocking"
    });
    return;
}