import express from 'express';
import { blockingController } from '../controllers/blockingController';

let router = express.Router();

export function blockingRoutes() {
    router.get("/counter",blockingController);
    return router;
}