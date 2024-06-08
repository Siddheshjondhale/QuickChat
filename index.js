

import express from 'express';
import { Connection } from './Databases/db.js';
import route from './routes/routes.js';
import cors from 'cors'
import bodyParser from 'body-parser';
const app = express();

// Configure CORS to allow requests from your client domain
const corsOptions = {
  origin: 'https://messaging-app-latest.vercel.app', // Update this to match your client's URL
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',route)

Connection();
const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));
