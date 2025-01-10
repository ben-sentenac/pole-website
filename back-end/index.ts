import { buildServer } from "./app";
import process from "node:process";


const server = await buildServer();
try {
    await server.listen({port:3000,host:'127.0.0.1'});
} catch (error) {
    server.log.error(error)
   process.exit(1);
}