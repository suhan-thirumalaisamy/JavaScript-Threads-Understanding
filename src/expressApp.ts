import express from 'express';
import {API_VERSION, PORT} from './config';
import routes from './routes';


const initialiseExpressApp = () => {
    const app = express();
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    

    routes(app,API_VERSION);

    return app;
}

export default initialiseExpressApp;