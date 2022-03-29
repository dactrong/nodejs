
import express from 'express';
import cors from 'cors';
import productRoute from '../routes/product';
import categoryRoute from '../routes/category';
import userRouter from '../routes/auth'
import morgan from 'morgan';
import mongoose from 'mongoose'
const app = express();

app.use(cors())
// midleware
app.use(morgan('tiny'))
app.use(express.json())

app.use("/api", productRoute)
app.use("/api", userRouter)
app.use("/api", categoryRoute)
//connect

mongoose.connect("mongodb://localhost:27017/web16310")
    .then(() => console.log("Kết nối thành công"))
    .catch(error => console.log(error))
const PORT = 8000;
app.listen(PORT, () => {
    console.log("Chay server thanh cong", PORT);
});