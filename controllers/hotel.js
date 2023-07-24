import hotelModel from "../models/hotel.js"


export const createHotel = async(req,res)=>{

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