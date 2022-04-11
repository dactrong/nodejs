import mongoose, { Schema  } from "mongoose";
const { ObjectId } = mongoose.Types;
const productSchema = new Schema({
    name: {
        type: String,
        minLength: 5,
        required: true,
        unique: true
    }, 
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type:Number,
        required: true
    },
    images:{
        type: String,
        required: true
    },
    category:{
        type: ObjectId,
        required: true
    },
    desc:{
        type: String,
        required: true
    },
    

}, { timestamps: true});

export default mongoose.model('Product', productSchema);