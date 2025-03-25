import City from "../Models/City.js"

const createOnecity = async (req, res, next)=>{
       try {

        const cityData = req.body

        const CityCreated = await City.create(cityData)
        return res.status(201).json(
            {
                message: "Se creo la ciudad correctamente",
                response: CityCreated
            }
        )
        
       } catch (error) {
            next(error)
       }
}


const createManycity = async (req, res, next)=>{
    

    try {
        
        const cityData = req.body 
        const citiesCreated = await City.insertMany(cityData)
        return res.status(201).json(
            {
                message: "Se crearon las ciudades correctamente",
                response: citiesCreated
            }
        )
    } catch (error) {
        next(error)
    }
}

export {createOnecity, createManycity}

