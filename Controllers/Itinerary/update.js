import { response } from "express";
import Itinerary from "../../Models/Itinerary.js";


const updateIti = async (req, res, next) =>{

    try {
        
        const valorQuery = req.body
        console.log("Nombre recibido:", valorQuery.nameUser);
        const dataQuery = await Itinerary.updateOne(
            {nameUser: valorQuery.nameUser},
            {price: valorQuery.price}
        )

        return res.status(200).json(
            {
                response: dataQuery
            }
        )

    } catch (error) {
        next(error)
    }
}

export default updateIti