import initialiseExpressApp from './expressApp';
import startServer from './startServer';

(async () => {
    const app = initialiseExpressApp();
    startServer(app);
})();
