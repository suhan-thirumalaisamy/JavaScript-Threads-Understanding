import { Application } from 'express';
import { blockingRoutes } from './blockingRoutes';
import { nonBlockingRoutes } from './nonBlockingRoutes';


const routes = (app: Application, API_VERSION: string) => {
    const apiVersionIdentifier = `/api/${API_VERSION}`;
    app.use(`${apiVersionIdentifier}/blocking`, blockingRoutes());
    app.use(`${apiVersionIdentifier}/non-blocking`, nonBlockingRoutes());

}

export default routes;