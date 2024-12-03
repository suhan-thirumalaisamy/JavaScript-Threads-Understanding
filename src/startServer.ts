import dotenv from "dotenv";

import { Application } from "express";
import { PORT } from "./config";

dotenv.config({ path: `.env` });

const startServer = async (app: Application) => {
  app.listen(PORT, () => {
      console.log(`Listening to port ${PORT}`);
    })
    .on("error", (err) => {
      process.exit();
    });

  process.on("unhandledRejection", (reason, promise) => {
    console.log(`Unhandled Rejection at:${promise}reason:${reason}`);
  });

  process.on("exit", () => {
    process.exit(2);
  });

  process.on("SIGINT", () => {
    process.exit(2);
  });
};

export default startServer;
