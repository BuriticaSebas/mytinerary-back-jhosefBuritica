console.clear()
import express from "express";
import 'dotenv/config.js'
import morgan from "morgan";
import cors from "cors"
import routeMain from "./routes/routeMain.js"
import error404 from "./middlewares/error404.js";
import error400 from "./middlewares/error400.js";
import error500 from "./middlewares/error500.js";

const server = express()



const port = process.env.PORT  || 8080


server.use(express.urlencoded({extended:true}))
server.use(express.json())
server.use(morgan("dev"))
server.use(cors())


server.use(routeMain);

server.use(error404)
server.use(error400)
server.use(error500)



server.listen(port, ()=>{
    console.log(`Ya estoy esperando solicitues en el puerto ${port}`)
})

