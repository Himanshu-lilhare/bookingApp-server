import express from 'express'
import { createHotel, getHotel } from '../controllers/hotel.js'

const hotelRouter = express.Router()

hotelRouter.route('/createhotel').post(createHotel)

hotelRouter.route('/gethotels').get(getHotel)


export default hotelRouter
