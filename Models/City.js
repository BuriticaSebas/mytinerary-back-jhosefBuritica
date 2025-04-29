import { Schema, model } from "mongoose";
import "../configBD/connectDb.js"


const collection = "City";

const schema = new Schema(
  {
    name: { type: String, required: true },
    country: { type: String, required: true },
    language: { type: String, required: true },
    climate: { type: String, required: true }, 
    currency: { type: String, required: true }, 
    rating: { type: Number, default: 0 }, 
    imageUrl: { type: String, required: true },
    bestTimeToVisit: { type: String, required: true }, 
  },
  {
    timestamps:true
  }
);

const City = model(collection,schema)

export default City

