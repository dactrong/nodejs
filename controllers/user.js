import User from '../models/auth'

export const userById = async (req, res, next) => {
      try {
        const user = await  User.findById(id).exec();
        if(!user){
            res.status(404).json({message:"Không tìm thấy user"})
        }
        res.profile = user;
        next();
      } catch (error) {
          console.log(error);
      }
}