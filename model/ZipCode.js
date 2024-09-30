const mongoose = require("mongoose")
const zipCodeShema = new mongoose.Schema({
    position: {
        type: String
    },
    heading: {
        type: String
    },
    icon: {
        type: String
    },
    placeholder: {
        type: String
    },
    borderStyle: {
        type: String
    },
    borderColor: {
        type: String
    },
    borderRadius: {
        type: String
    },
    buttonText: {
        type: String
    },
    buttonRadius: {
        type: String
    },
    buttonBgColor: {
        type: String
    },
    buttonTextColor: {
        type: String
    },
    successMessage: {
        type: String
    },
    successColor: {
        type: String
    },
    failureMessage: {
        type: String
    },
    failureColor: {
        type: String
    }
})

const ZipCode = new mongoose.model("ZipCode", zipCodeShema)
module.exports= ZipCode
