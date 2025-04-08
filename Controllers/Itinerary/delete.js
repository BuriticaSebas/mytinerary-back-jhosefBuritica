import Itinerary from "../../Models/Itinerary.js";

const deleteIti = async (req, res , next) =>{

    try {

        const valorQuery = req.body 
        const dataQuery = await Itinerary.deleteOne({_id: valorQuery.id})
        
        return res.status(200).json(
            {
                msg:`Se elimino con exito el itinerario con el id ${valorQuery.id}`
            }
        )
    } catch (error) {
            next(error)
    }

}

export default deleteIti