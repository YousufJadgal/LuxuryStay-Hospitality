import express from 'express';
import connectToMongo from './database/db.js';
import contactrouter  from './router/contact.js';
import signuprouter from './router/auth.js';
import roomrouter from './router/room.js'
import cors  from 'cors';
const app = express();

app.use(cors());
const port = 4000;
connectToMongo();

app.use(express.json());


app.use("/api/contact/" , contactrouter);
app.use("/api/auth/" , signuprouter);
app.use("/api/room/" , roomrouter);





app.listen(port , ()=>{
    console.log(`App listen at http://localhost:${port}`)
})