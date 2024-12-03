import express from 'express';
import { nonBlockingController } from '../controllers/nonBlockingController';

const router = express.Router();

export function nonBlockingRoutes() {
    router.get('/simple-return', nonBlockingController);
    return router;
}