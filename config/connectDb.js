import mongoose from 'mongoose'

export const dbconnect= async(url)=>{
    console.log(url+" mongourl")
    const {connection} = await mongoose.connect(url)
    console.log("database is connect with "+ connection.host)
  }