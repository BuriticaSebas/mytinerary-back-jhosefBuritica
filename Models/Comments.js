import { Schema, model } from "mongoose";



let collection = "Comments"

const schema = new Schema(
    {
        description: {type: String, required:true},
        date: {type: Date, default: Date.now},
        user: {type:Schema.Types.ObjectId, ref: "User" , required: true},
        itinerary: {type:Schema.Types.ObjectId, ref: "Itinerary" , required: true},
    }
)

const Comments = model(collection, schema)


export default Comments



