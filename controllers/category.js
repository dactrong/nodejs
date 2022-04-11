
import Category from '../models/category'
import Product from '../models/product';
export const create = async (req, res) => {
    try {
        const category = await new Category(req.body).save();
        res.json(category);
    } catch (error) {
        res.status(404).json({
            error: 'Không thêm được danh mục'
        })
    }
}
export const read = async (req, res) => {
    const condition = { _id: req.params.id };
    try {
        const category = await Category.findOne(condition).exec();
        const product = await Product.find({ category }).select('-category').exec();
        res.json({
            category, product
        });
    } catch (error) {
        res.status(404).json({
            error: 'Lỗi'
        })
    }
}
export const list = async (req, res) => {
    try {
        const category = await Category.find({}).exec();
        res.json(category);
    } catch (error) {
        res.status(404).json({
            error: 'Lỗi'
        })
    }
}

export const remove = async (req, res) => {
    try {
        const category = await Category.findOneAndDelete({ _id: req.params.id }).exec();
        res.json(category)
    } catch (error) {
        res.status(400).json({ error: "Không xóa được sản phẩm" })
    }
}

export const update = async (req, res) => {
    try {
        const category = await Category.findOneAndUpdate({ _id: req.params.id }, req.body).exec();
        res.json(category)
    } catch (error) {
        res.status(404).json({ error: "Khong update được sản phẩm" })

    }
}