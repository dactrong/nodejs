// const http = require('http');
// const express = require("express");
import express from 'express';
import cors from 'cors';
import productRoute from './routes/product';
import morgan from 'morgan';
const app = express();

app.use(cors())
// midleware
app.use(morgan('tiny'))

app.use("/api",productRoute)
//connect
const PORT = 3001;
server.listen(PORT, () => {
    console.log("Chay server thanh cong", PORT);
});