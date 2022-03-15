// import User from '../models/user'

import mongoose from "mongoose";
const User = mongoose.model("User", { name: String });
export const register = async (req, res) => {
    try {
        const user = await new User(req.body).save();
        res.json(user);
    } catch (error) {
        res.status(400).json({
            error: "Không thêm được Email"
        })
    }
}

export const login = async (req, res) => {
    console.log(req.params.id)
    try {
        const user = await User.findOne({_id: req.params.email}).exec();
        res.json(user);
    } catch (error) {
        res.status(400).json({
            error: "Không có Email"
        })
    }
}