const ZipCode = require("../model/ZipCode")
const create = async (req, res) => {
    try {
        const data = new ZipCode(req.body)
        console.log("Data is", data);

        data.save()

        res.status(200).send({ success: true, message: "zipCode value successfully save " })

    }
    catch (error) {
        res.staus(500).send({ success: false, message: "internal server error" })
    }
}


const update = async (req, res) => {
    try {

        const data = await ZipCode.findOne({ _id: req.params._id })
        if (data) {
            data.position = req.body.position ?? data.position;
            data.heading = req.body.heading ?? data.heading;
            data.icon = req.body.icon ?? data.icon;
            data.placeholder = req.body.placeholder ?? data.placeholder;
            data.borderStyle = req.body.borderStyle ?? data.borderStyle;
            data.borderColor = req.body.borderColor ?? data.borderColor;
            data.borderRadius = req.body.borderRadius ?? data.borderRadius;
            data.buttonBgColor = req.body.buttonBgColor ?? data.buttonBgColor;
            data.buttonTextColor = req.body.buttonTextColor ?? data.buttonTextColor;
            data.successMessage = req.body.successMessage ?? data.successMessage;
            data.successColor = req.body.successColor ?? data.successColor;
            data.failureMessage = req.body.failureMessage ?? data.failureMessage;
            data.failureColor = req.body.failureColor ?? data.failureColor;
            console.log(data);
            await data.save();
            res.send({ success: true, message: "Record is Updated" });
        } else {

            console.log("data not found");
            res.status(404).send({ success: false, message: "Data not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, message: "Internal Server Error" });
    }
}
module.exports = [create, update]