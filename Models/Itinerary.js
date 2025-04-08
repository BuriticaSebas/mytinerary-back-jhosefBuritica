import { Schema, model } from "mongoose";

let collection = "Itinerary";

const schema = new Schema(
  {
    imgUser: { type: String, required: true },
    nameUser: { type: String, required: true },
    price: { type: Number, required: true },
    duration: { type: Number, required: true },
    likes: { type: Number, required: true },
    hashtags: { type: [String], required: true },
    comments: { type: [String] }, 
    city: { type: Schema.Types.ObjectId, ref: "City", required: true },
  },
  {
    timestamps: true 
  }
);

const Itinerary = model(collection, schema);

export default Itinerary;
