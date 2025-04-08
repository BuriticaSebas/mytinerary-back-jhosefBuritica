import City from "../../Models/City.js"

const allCities = async (req,res)=>{
    try {

        const allData = await City.find()
        return res.status(200).json(
            {
                response: allData
            }
        )
    } catch (error) {
        next(error)
    }
}



const cityById = async(req,res) =>{


    try {

        const valorQuery = req.params.IdCity
        const cityById = await City.find({_id: valorQuery})

        return res.status(200).json(
            {
                response: cityById
            }
        )

    } catch (error) {
        next(error)
    }
}

export {allCities, cityById}