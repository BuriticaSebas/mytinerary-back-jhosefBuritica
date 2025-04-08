import { Router } from "express";
import create from "../Controllers/Itinerary/create.js"
import { allItineraries, byCiudad, byId } from "../Controllers/Itinerary/read.js";
import updateIti from "../Controllers/Itinerary/update.js";
import deleteIti from "../Controllers/Itinerary/delete.js";

const routerItinerary = Router()


routerItinerary.post("/create", create)

routerItinerary.post("/update", updateIti)

routerItinerary.post("/deleteIti", deleteIti)

routerItinerary.get("/allItineraries" ,allItineraries)

routerItinerary.get("/byId/:idIti" , byId)

routerItinerary.get("/byCity/:nameIti" , byCiudad)


export default routerItinerary