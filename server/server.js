import express from 'express'
import mongoose from 'mongoose'
import dbConnect from './config/database.js';
import {router as authRoutes} from './routes/authRoutes.js'
const app = express();
app.use(express.json());

dbConnect();


app.use('/api/v1',authRoutes);
app.listen(3000,()=>{
    console.log("server is running on 3000")
})

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'internal server error';
    return res.status(statusCode).json({
        success:false,
        error: message,
        statusCode,
    });
})