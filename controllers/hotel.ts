import { Request, Response } from "express"
import hotelModel from "../models/hotel.js"


export const createHotel = async(req:Request,res:Response)=>{

    try {
      const {coordinates,name,address} = req.body
      const createdHotel = await hotelModel.create({
            geometry:{
                coordinates
            },
            properties:{
                name,
                address
            }
            })
            res.json(createdHotel)
    } catch (error) {
        res.send(error)
    }
 


}

export const getHotel = async(req:Request,res:Response)=>{

    try {
        
        const hotels= await hotelModel.find({})
         
        res.json({
            hotels
        })
       
    } catch (error) {
        res.send(error)
    }
 


}