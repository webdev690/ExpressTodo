import e from "express";
import 'dotenv/config'
const uri=process.env.mongo_uri
import { dbConnection } from "./services/dbConnection.js";
const app=e()
dbConnection(uri)
app.get("/",(req,res)=>{
    res.send("working")
})

app.listen(3000)