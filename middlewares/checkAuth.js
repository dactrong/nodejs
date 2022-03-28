import expressJWT from 'express-jwt';


export const checkAuth = (req, res,next) => {
    const isAdmin = true;
    if(isAdmin){
        next();
    } else {
        console.log('Biến đi cho khuất mắt ta hahaha');
    }
}

export const requireSignin = expressJWT({
      algorithms:["HS256"], 
      secret : "123456", 
      requestProperty : "auth"
}) 


export const isAuth = (req, res, next) => {
    const status = req.profile._id == req.profile.auth;
    if(!status) {
        res.status(401).json({message:"Không có quyền truy cập"})
    }
    next();
}
export const isAdmin = (req, res, next) => {
    if(req.profile._id){
     res.status(400).json({message:"Bạn không phải là admin"})
    }
    next();
}

