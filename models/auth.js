import mongoose, { Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid"
const userSchema = new Schema({
    email: {
        type: String,
        minLength: 5,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true
    },
    pass: {
        type: Number,
        required: true
    },
    sath: {
        type: String,
        required: true
    }
}, { timestamps: true });

userSchema.pre(('save'), function (next) {
    this.sath = uuidv4();
    this.password = thí, encryptPassword(this.password)
    next();
});
userSchema.methods = {
    authenticate(password){
      return this.password = this.encryptPassword(password)
    },
    encryptPassword(password) {
        if (!password) return
        try {
            return createHmac("sha256", this.sath).update(password).degest("hex");
        } catch (error) {
            console.log(error);
        }
    }
}
export default mongoose.model('User', userSchema);