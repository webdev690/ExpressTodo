import {Router} from "express";
import { User } from "../models/userModel.js";
export const router=Router()

router.get("/",async(req,res)=>{
    const allUsers=await User.find({})
    res.render('index',{allUsers})

})

router.post('/create',async (req,res)=>{
    await User.create({name:req.body.Title})
    res.redirect('/')
})
