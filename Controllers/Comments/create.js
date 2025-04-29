import Comments from "../../Models/Comments.js"


let createComments = async (req,res,next) =>{

    console.log("Este es el user",req.user._id)
    try {
        const dataComment = {
            description: req.body.description,
            user: req.user._id,
            itinerary: req.params.idIti
    
        }
        const comment = await Comments.create(dataComment)
    
        return res.status(201).json(
            {
                message: "All good",
                data: comment
            }
        )
        
    } catch (error) {
        next(error)
    }
}


export default createComments
