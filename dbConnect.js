const mongoose = require("mongoose")

async function getConnect() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/zip-code-validator")
        console.log("DataBase is Connected!!!")
    } catch (error) {
        console.log(error)
    }
}
getConnect()