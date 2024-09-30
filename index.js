const express = require("express")
require("./dbConnect")
const router = require("./Router/index")
const cors = require("cors")
const app = express()
app.use(cors());
app.use(express.json())
app.use(express.static("public"))
app.use("/api",router)


app.listen(8000,console.log("Server is Running at http://locahost:8000"))