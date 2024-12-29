import e from "express"
import path from 'path'
import "dotenv/config"
const uri = process.env.mongo_uri
import { dbConnection } from "./services/dbConnection.js"
import { router } from "./Routes/routes.js"

const app = e()

app.use(e.json())
app.use(e.urlencoded({ extended: true }))
app.set("view engine", "ejs")
app.use(e.static(path.join(process.cwd(), 'public')))
dbConnection(uri)

app.get("/", router)
app.post('/create',router)

app.listen(3000)
