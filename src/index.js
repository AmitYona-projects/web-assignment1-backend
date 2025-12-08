import config from "./config/env.config";
import initServer from "./utils/express/server"

const main = async () => {
    const app = await initServer();

    app.listen(config.server.port, () => {
        console.log(`Server is running on port: ${config.server.port}`);
    });
};

main().catch((error) => console.error(`Error when running the server: ${error}`));
