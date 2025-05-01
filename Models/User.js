import mongoose,{ Schema, model } from "mongoose";

let collection = "User"

let schema = new Schema(
    {
        name: {type:String, required: true},
        lastname: {type:String, required: true},
        email: {type:String, required: true},
        password: {type:String, required: true},
        urlPhoto: {type:String, required: true},
        country: {type:String, required: true},
        online: {type: Boolean, default: false}
    },{
        timestamps: true
    }
)

const User = mongoose.models[collection] || model(collection, schema);

export default User
