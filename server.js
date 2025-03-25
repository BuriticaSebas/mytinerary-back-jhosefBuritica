console.clear()
import express from "express";
import 'dotenv/config.js'
import morgan from "morgan";
import cors from "cors"
import routeMain from "./routes/routeMain.js"
const server = express()



const port = process.env.PORT  || 8080


server.use(morgan("dev"))
server.use(cors())


server.use(routeMain);



server.listen(port, ()=>{
    console.log(`Ya estoy esperando solicitues en el puerto ${port}`)
})

