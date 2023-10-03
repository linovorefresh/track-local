import mongoose from "mongoose";
import 'dotenv/config'

let uri = process.env.MONGODB_URI;

mongoose.set('strictQuery', false);
mongoose.connect(uri)
    .then(() => console.log('db connected'))
    .catch((err) => console.log(err))

