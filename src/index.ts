import express, { Express } from "express";
import { PORT } from "./constans";

class App {
    public server: Express = express();

    constructor() {}

    run() {
        this.server.listen(PORT, () => {
            console.log(`Server starting on port: ${PORT}`);
        });
    }
}

const service = new App();
service.run();
