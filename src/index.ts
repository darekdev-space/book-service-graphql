import express, {Application} from 'express';

import {PORT} from './constans';

class App {
    public server: Application = express();

    // constructor() {}

    run() {
        this.server.listen(PORT, () => {
            console.log(`Server starting on port: ${PORT}`);
        });
    }
}

const service = new App();
service.run();
