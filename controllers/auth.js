import User from '../models/auth'

export const register = async (req, res) => {
    try {
        const { email, name, password } = req.body;
        const register = await User.findOne({ email }).exec();
        if (register) {
            res.status(400).json({ message: "Tài khoản đã tồn tại" })
        }
        const user = await new User(req.body).save();
        res.json({
            user: {
                _id: user._id,
                name: user.name,
                email: user.email
            }
        })
    } catch (error) {
        res.status(400).json({
            error: "Đăng kí thất bại "
        })
    }
}

export const signin = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne(email).exec();
        res.json(user);
        if (!user) {
           res.status(404).json({ message:"Email không tồn tại"})
        }
        if(!user.authenticate(password)) {
            res.status(404).json({ message:"Nhập sai password"})
        }
        res.json({
            user:{
                _id: user._id,
                username: user.username,
                password: user.password
            }
        })
    } catch (error) {
        res.status(400).json({
            error: "Đăng nhập thất bại"
        })
    }
}