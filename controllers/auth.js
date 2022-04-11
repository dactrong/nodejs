import User from '../models/user'
import jwt from 'jsonwebtoken'
export const register = async (req, res) => {
    const { email, name, password, phone, address } = req.body;
    try {
        const existUser = await User.findOne({ email }).exec();
        if (existUser) {
            res.status(400).json({
                message: "Tài khoản đã tồn tại"
            })
        }
        const user = await new User({ email, name, password, phone, address }).save();
        res.json({
            user: {
                _id: user._id,
                email: user.email,
                name: user.name,
                phone: user.phone,
                address: user.address
            }
        });
    } catch (error) {
        res.status(400).json({
            message: "Đăng ký thất bại"
        })
    }
}
export const userUpdate = async (req, res) => {
    const condition = { _id: req.params.id }
    const { email, name, password, phone, address } = req.body;
    try {
        const existUser = await User.findOne({ email }).exec();
        if (existUser) {
            res.status(400).json({
                message: "Tài khoản đã tồn tại"
            })
        }
        const user = await  User.findOneAndUpdate(condition,{ email, name, password, phone, address }).exec();
        res.json({
            user: {
                _id: user._id,
                email: user.email,
                name: user.name,
                phone: user.phone,
                address: user.address
            }
        });
    } catch (error) {
        res.status(400).json({
            message: "Đăng ký thất bại"
        })
    }
}


export const readUser = async (req, res) => {
    const condition = { _id: req.params.id };
    try {
        const user = await User.findOne(condition).exec();

        res.json({
            user
        });
    } catch (error) {
        res.status(404).json({
            error: 'Lỗi'
        })
    }
}

export const listUser = async (req, res) => {
    try {
        const user = await User.find({}).exec();
        res.json(user);
    } catch (error) {
        res.status(400).json({
            error: "Không có sản phẩm"
        })
    }
}

export const signin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email }).exec();
        if (!user) {
            res.status(400).json({
                message: "Email không tồn tại"
            })
        }
        if (!user.authenticate(password)) {
            res.status(400).json({
                message: "Mật khẩu không đúng"
            })
        }
        const token = jwt.sign({ _id: user._id }, "123456", { expiresIn: '1h' })
        res.json({
            token,
            user: {
                _id: user._id,
                email: user.email,
                name: user.name,
                phone: user.phone,
                address: user.address,
                role: user.role
            }
        })
    } catch (error) {
        res.status(400).json({
            message: "Đăng nhập thất bại"
        })
    }
}


export const remove = async (req, res) => {
    try {
        const user = await User.findOneAndDelete({ _id: req.params.id }).exec();
        res.json(user);
    } catch (error) {
        res.status(400).json({
            error: "Xóa tài khoản không thành công"
        })
    }
}