 
 import Category from '../models/category'

 export const create =  async (req, res) => {
      try {
        const category = await new Category(req.body).save();
        res.json(category);
      } catch (error) {
          res.status(404).json({
              error: 'Không thêm được danh mục'
          })
      }
 }