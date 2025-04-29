import { Router } from "express";
import create from "../Controllers/Itinerary/create.js"
import { allItineraries, byCiudad, byId } from "../Controllers/Itinerary/read.js";
import updateIti from "../Controllers/Itinerary/update.js";
import deleteIti from "../Controllers/Itinerary/delete.js";
import createComments from "../Controllers/Comments/create.js";
import getComments from "../Controllers/Comments/read.js";
import passport from "../middlewares/passport.js";


const routerItinerary = Router()


routerItinerary.post("/createcomment/:idIti",passport.authenticate('jwt',{session:false}) ,createComments)

routerItinerary.get("/getComments", getComments)

routerItinerary.post("/create",passport.authenticate('jwt',{session:false})  ,create)

routerItinerary.put("/update",passport.authenticate('jwt',{session:false})  ,updateIti)

routerItinerary.delete("/deleteIti", passport.authenticate('jwt',{session:false}) ,deleteIti)

routerItinerary.get("/allItineraries" ,allItineraries)

routerItinerary.get("/byId/:idIti" , byId)

routerItinerary.get("/byCity/:nameIti" , byCiudad)


export default routerItinerary