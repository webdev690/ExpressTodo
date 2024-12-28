import mongoose from "mongoose";

export async function dbConnection(url){
    await mongoose.connect(url)
    console.log("connection succesful");
    
}