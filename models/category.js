import mongoose, { Schema } from "mongoose";


const categoryRouter = new Schema ({ 

    name:{
        type: String,
        required: true
    }
}, { timestamps: true})

export default mongoose.model('Category', categoryRouter)