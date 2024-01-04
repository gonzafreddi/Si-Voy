import { server } from "./src/app.js";
import {conn} from './src/db.js'

const PORT = process.env.PORT || 3000

conn.sync({ alter:true}).then(() => {
    server.listen(PORT, () => {

    
      console.log(`server listening at ${PORT}`); 
    });
  });
  