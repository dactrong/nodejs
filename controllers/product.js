
import Product from '../models/product'

export const create = async (req, res) => {
    try {
        const product = await new Product(req.body).save();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: "Không thêm được sản phẩm"
        })
    }
}
export const list = async (req, res) => {
    try {
        const product = await Product.find({}).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: "Không có sản phẩm"
        })
    }
}

export const get = async (req, res) => {
    console.log(req.params.id)
    try {
        const product = await Product.findOne({ _id: req.params.id }).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: "Không có sản phẩm"
        })
    }
}

export const remove = async (req, res) => {
    try {
        const product = await Product.findOneAndDelete({ _id: req.params.id }).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: "Xóa sản phẩm không thành công"
        })
    }
}
export const update = async (req, res) => {
    const condition = { id: req.params.id }
    const update = req.body;
    try {
        const product = await Product.findOneAndUpdate(condition, update).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: "Xóa sản phẩm không thành công"
        })
    }
}

export const search = async (req, res) => {
    try {
        const productSearch = await Product.find({ name: {$regex: `.*${req.body.search}*.`, $options: 'i' } }).exec();
        res.json(productSearch);
    } catch (error) {
        res.status(400).json({
            error: "Lỗi không tìm thấy "
        })
    }
}
