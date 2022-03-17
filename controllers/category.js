
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
        const category = await Category.findOne( condition).exec();
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