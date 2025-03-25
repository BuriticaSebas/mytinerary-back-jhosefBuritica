const allCities = (req,res)=>{
    res.send("Me pediste todas las ciudades")
}



const cityById = (req,res) =>{
    res.send("Me pediste una cidudad por id")
}

export {allCities, cityById}