import { Schema, model } from "mongoose";

let collection = "Itinerary";

const schema = new Schema(
  {
    title: {type:String, required:true},
    price: { type: Number, required: true },
    duration: { type: Number, required: true },
    likes: { type: Number, default:0 },
    hashtags: { type: [String], required: true },
    city: { type: Schema.Types.ObjectId, ref: "City", required: true },
    user: {type:Schema.Types.ObjectId, ref: "User" , required: true},
  },
  {
    timestamps: true 
  }
);

const Itinerary = model(collection, schema);

export default Itinerary;
