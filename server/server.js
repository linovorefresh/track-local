import express from "express";
import cors from 'cors';
import morgan from 'morgan';
import mongoose from "mongoose";
import 'dotenv/config'
import router from "./routes/auth.js";

// init app and express 
const app = express();

let uri = process.env.MONGODB_URI;

mongoose.set('strictQuery', false);
mongoose.connect(uri)
    .then(() => console.log('db connected'))
    .catch((err) => console.log(err))


app.use(express.json()) //any json in any request to be used when passed in
app.use(cors())
app.use(morgan('dev'));

app.use('/api', router);

app.listen(8000, () => console.log( '** SERVER RUNNING PORT 8000 **'))