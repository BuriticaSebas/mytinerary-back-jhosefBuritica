import Itinerary from "../../Models/Itinerary.js";


const createItinerary = async (req, res, next) =>{

   try {
    const valuesItinerary = req.body

    const sendValuesMongo = await Itinerary.create(valuesItinerary)

    return res.status(201).json(
        {
            msg:"Creado exitosamente",
            response: sendValuesMongo
        }
    )
    
   } catch (error) {

    next(error)

   }

}


export default createItinerary