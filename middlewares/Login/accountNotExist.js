import User from "../../Models/user.js";

export default async (req,res,next) =>{
    try {
        let account = await User.findOne({email: req.body.email})       
        if (account) {
            req.user = {
                name: account.name,
                lastname: account.lastname,
                email: account.email,
                password: account.password,
                urlPhoto: account.photo,
                country: account.country
            }
            return next()
        }
        return res.status(400).json({
            success:false,
            message:"User does not exists"
        })
    } catch (error) {
        next(error)
    }
}