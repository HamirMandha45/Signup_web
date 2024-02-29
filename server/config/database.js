import mongoose from 'mongoose'
import colors from 'colors'
import dotenv from 'dotenv'

dotenv.config();
const dbConnect = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL)
        console.log("db connection done successfully")
    } catch (error) {
        
    }
}

export default dbConnect;