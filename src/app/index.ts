import Express from "express";
import Cors from 'cors';
import Public from "./routes/public";

const server = Express();
server.use(Express.json());
server.use(Express.urlencoded({ extended: true }));
server.use(Cors());

server.use("/api", Public);

export { server };
