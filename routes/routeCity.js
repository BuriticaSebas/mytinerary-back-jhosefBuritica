import { Router } from "express";
import { allCities,cityById } from "../Controllers/City/read.js"
import { createOnecity, createManycity } from "../Controllers/City/create.js"

const routeCity = Router()

routeCity.get("/allCities", allCities)

routeCity.get("/cityById/:IdCity", cityById)

routeCity.post("/createOnecity", createOnecity)

routeCity.post("/createManycity", createManycity)

export default routeCity