const router = new require("express").Router()
// const [create,update] = require("../Controler/ZipCodeControler")
// const createOrUpdate = require("../Controler/ZipCodeControler")


// router.post("/",create)
// router.put("/:_id",update)

// module.exports = router

// const router = require("express").Router(); 
const createOrUpdate = require("../Controler/ZipCodeControler"); 

// Single POST route to handle both creation and updates
router.post("/", createOrUpdate);

module.exports = router;