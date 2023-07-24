import express from 'express'
import { createHotel } from '../controllers/hotel.js'

const hotelRouter = express.Router()

hotelRouter.route('/createhotel').post(createHotel)

export default hotelRouter
