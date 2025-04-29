import User from "../../Models/user.js";

let register = async (req,res,next) => {
    try {
        let userInfo = req.body
        console.log(userInfo);
        let createUser = await User.create(userInfo)
        return res.status(201).json({
            response: createUser
        })   
    } catch (error) {
        next(error)
    }
}

export default register

