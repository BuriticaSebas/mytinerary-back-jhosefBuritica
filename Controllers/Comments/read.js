import Comments from "../../Models/Comments.js";


const getComments = async (req, res, next) =>{
    try {
        
     //Al comentario le mando el id del itinerario
     
     const dataComments = await Comments.find()

     return res.status(200).json(
        {
            message: "All good",
            info: dataComments
        }
     )

    } catch (error) {
        next(error)
    }
}

export default getComments