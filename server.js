import e from "express"
import path from "path"
import "dotenv/config"
const uri = process.env.mongo_uri
const port = process.env.PORT
import { dbConnection } from "./services/dbConnection.js"
import { router } from "./Routes/routes.js"

const app = e()

app.use(e.json())
app.use(e.urlencoded({ extended: true }))
app.set("view engine", "ejs")
app.use(e.static(path.join(process.cwd(), "public")))
dbConnection(uri)

app.get("/", router)
app.post("/create", router)
app.get("/user/:id", router)
app.post("/update/:id", router)
app.get("/delete/:user",router)
app.listen(port)
