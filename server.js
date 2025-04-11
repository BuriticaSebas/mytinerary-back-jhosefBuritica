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

server.get("/rutaPrueba", (req, res) => {
  res.send("Hola recibí la solicitud")
});

server.use(error404)
server.use(error400)
server.use(error500)


//Esto esta asi para poder probar la app desde mi celular, es decir, que el servidor sea accesible desde mi red local
server.listen(port, '0.0.0.0', () => {
    console.log(`Servidor corriendo en puerto ${port}`);
  });
