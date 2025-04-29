import {Router} from "express"
import routeCity from "./routeCity.js"
import routeItinerary from "./routeItinerary.js"
import routerUser from "./routerUser.js"

const routeMain = Router()


routeMain.use("/mytinerary/city", routeCity)
routeMain.use("/mytinerary/city/itinerary", routeItinerary )
routeMain.use("/mytinerary/user" , routerUser)

export default routeMain


