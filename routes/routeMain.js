import {Router} from "express"
import routeCity from "./routeCity.js"

const routeMain = Router()


routeMain.use("/mytinerary/city", routeCity)


export default routeMain


