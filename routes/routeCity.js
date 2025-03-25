import { Router } from "express";
import { allCities,cityById } from "../Controllers/read.js"
import { createOnecity, createManycity } from "../Controllers/create.js"

const routeCity = Router()

routeCity.get("/allCities", allCities)

routeCity.get("/cityById/:IdCity", cityById)

routeCity.post("/createOnecity", createOnecity)

routeCity.post("/createManycity", createManycity)

export default routeCity