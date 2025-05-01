import User from "../../Models/User.js";

let register = async (req,res,next) => {
    try {
        let userInfo = req.body
        console.log(userInfo);
        let createUser = await User.create(userInfo)
        return res.status(201).json({
            response: createUser,
            message : "User created succesfuly"
        })   
    } catch (error) {
        next(error)
    }
}

export default register

