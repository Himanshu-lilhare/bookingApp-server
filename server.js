import express from 'express'
import dotenv from 'dotenv'
import { dbconnect } from './config/connectDb.js'
import hotelRouter from './routes/hotel.js'
const app = express()

dotenv.config({
    path:'./config/.env'
})
app.use(express.json())
app.use(hotelRouter)
app.get('/',(req,res)=>{
    res.send('hello bro')
})



dbconnect(process.env.MONGO_URI)




app.listen(process.env.PORT,()=>{
    console.log(`server running on POrt ${process.env.PORT}`)
})