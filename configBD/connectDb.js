import mongoose from "mongoose";
import "dotenv/config.js"


const url = process.env.URL_MONGO

mongoose.connect(url)
.then(()=> console.log("Conexion a Mongo Lista"))
.catch(error => console.log(error))