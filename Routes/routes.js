import { Router } from "express"
import { User } from "../models/userModel.js"
export const router = Router()

router.get("/", async (req, res) => {
  const allUsers = await User.find({})
  res.render("index", { allUsers })
})

router.post("/create", async (req, res) => {
  await User.create({ name: req.body.Title })
  res.redirect("/")
})

router.get("/user/:id", async (req, res) => {
  const user = await User.findOne({ _id: req.params.id })
  res.render("update", { user })
})

router.post("/update/:id", async (req, res) => {
  const { updated } = req.body
  const user = await User.findOneAndUpdate(
    { _id: req.params.id },
    { name: updated },
    { new: true }
  )
  res.redirect("/")
})
router.get("/delete/:user", async (req, res) => {
  await User.findOneAndDelete({ _id:req.params.user })
  res.redirect("/")
})
