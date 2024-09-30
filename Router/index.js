const router = new require("express").Router()
const ZipCodeRouter = require("./ZipCodeRouter")
router.use("/zipcode",ZipCodeRouter)

module.exports = router