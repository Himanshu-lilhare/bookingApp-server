import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
  
geometry:{
   type:{
    type:String,
    enum:['Point'],
    default:'Point'
   },
   coordinates:{
    type:[Number],
    required:true,

   } 
},
properties:{
    name:{
        type:String,
        required:true,
        maxlength:40
    },
    address:{
        type:String,
        required:true
    }
}

}) 

const hotelModel = mongoose.model('hotel',hotelSchema)
export default hotelModel