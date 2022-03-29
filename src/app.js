
import express from 'express';
import cors from 'cors';
import productRoute from '../routes/product';
import categoryRoute from '../routes/category';
import userRouter from '../routes/auth'
import morgan from 'morgan';
import mongoose from 'mongoose';
import swaggerUI from 'swagger-ui-express';
import YAML from 'yaml'
const app = express();
const swaggerJSDocs = YAML.load("./api.yaml")

app.use(cors())
// midleware
app.use(morgan('tiny'))
app.use(express.json())
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJSDocs))


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