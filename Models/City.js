import { Schema, model } from "mongoose";
import "../configBD/connectDb.js"


const collection = "City";

const schema = new Schema(
  {
    name: { type: String, required: true },
    country: { type: String, required: true },
    language: { type: String, required: true },
    climate: { type: String, required: true }, // Clima promedio (ej. "Tropical", "Mediterráneo", etc.)
    currency: { type: String, required: true }, // Moneda local
    rating: { type: Number, default: 0 }, // Calificación promedio de turistas (de 1 a 5)
    imageUrl: { type: String, required: true },
    bestTimeToVisit: { type: String, required: true }, // Mejor época para visitar
  },
  {
    timestamps:true
  }
);

const City = model(collection,schema)


export default City