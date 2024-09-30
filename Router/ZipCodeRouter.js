const router = new require("express").Router()
const [create,update] = require("../Controler/ZipCodeControler")


router.post("/",create)
router.put("/:_id",update)

module.exports = router