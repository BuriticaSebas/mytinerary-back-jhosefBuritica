import { response } from "express";
import Itinerary from "../../Models/Itinerary.js";
import City from "../../Models/City.js";

const allItineraries = async (req, res, next) => {
  try {
    const allData = await Itinerary.find().populate("city", "name").exec();

    return res.status(200).json({
      msg: "Respuesta",
      response: allData,
    });
  } catch (error) {
    next(error);
  }
};

const byId = async (req, res, next) => {
  try {
    const valorQuery = req.params.idIti;

    const dataQuery = await Itinerary.findById(valorQuery)
      .populate("city", "name")
      .exec();

    return res.status(200).json({
      msg: "Excelente",
      response: dataQuery,
    });
  } catch (error) {
    next(error);
  }
};

const byCiudad = async (req, res, next) => {
  try {
    const valorQuery = req.params.nameIti;

    //    const findCity = await City.findOne({name: valorQuery})

    //     const dataQuery = await Itinerary.findOne({city: findCity._id}).populate('city', 'name').exec()

    const dataQuery = await Itinerary.findOne({ city: valorQuery })
      .populate("city", "name")
      .exec();
    return res.status(200).json({
      msg: "Excelente",
      response: dataQuery,
    });
  } catch (error) {
    next(error);
  }
};

export { allItineraries, byCiudad, byId };
