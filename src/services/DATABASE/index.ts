import { Sequelize } from "sequelize";
import { config } from "dotenv";

config();
const sequelize = new Sequelize(
  process.env.BD_NAME!,
  process.env.BD_USER!,
  process.env.BD_PASSWORD!,
  {
    host: process.env.BD_PATH!,
    port: Number.parseInt(process.env.BD_PORT!),
    dialect:"mysql"
  }
);

export default sequelize;
