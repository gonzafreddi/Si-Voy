import { server } from "./src/app.js";
import {conn} from './src/db.js'

const PORT = 3000

conn.sync({ force:true}).then(() => {
    server.listen(PORT, () => {
      console.log(`server listening at ${PORT}`); // eslint-disable-line no-console
    });
  });
  