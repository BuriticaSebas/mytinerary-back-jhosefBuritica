import {Router} from "express"
import routeCity from "./routeCity.js"
import routeItinerary from "./routeItinerary.js"

const routeMain = Router()


routeMain.use("/mytinerary/city", routeCity)
routeMain.use("/mytinerary/city/itinerary", routeItinerary )


export default routeMain


