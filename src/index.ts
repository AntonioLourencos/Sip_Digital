import { server } from "./app";
import { config } from "dotenv";

const port = process.env.PORT || 5000;

config();
server.listen(port, () => {
  console.log(`Server Listening at http://localhost:${port}`);
});
