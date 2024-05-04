
const content = require("../models/content");





const validator = async (req, res, next) => {

    try {
        let contentData = await content.findOne();
        if (contentData) {
            console.log(contentData._id)

            let delData = await content.findByIdAndDelete(contentData._id);

            if (delData) {
                next();
            }
            else {
                res.status(400).json({ message: "could not wipe out the previous data", success: false })
            }

        }
        else{
            next();

        }
    }
    catch (err) {

        res.status(400).json({ message: "somthing went wrong", success: false });

    }

}




const setContent = async (req, res) => {

    try {





        let setData = new content(req.body);
        setData.save().then((resp) => {
            if (resp) {
                res.status(200).json({ message: "record added successfully", success: true });
            }
            else {
                res.status(400).json({ message: "somthing went wrong", success: false });
            }

        })
    }
    catch (err) {
        res.status(400).json({ message: "somthing went wrong", success: false });
    }

}





const updateContent = async (req, res) => {

    try {

        let id = req.params.id;
        let contentData = await content.findByIdAndUpdate(id, req.body);
        if (contentData) {
            res.status(200).json({ message: "content updated successfully", success: true });
        }
        else {
            res.status(501).json({ message: "somthing went wrong", success: false });
        }

    }
    catch (err) {

        res.status(404).json({ message: "somthing went wrong" })

    }

}

const getContent = async (req, res) => {

    try {

        let contentData = await content.findOne();
        if (contentData) {
            res.status(200).json(contentData)
        }
        else {
            res.status(400).json({ message: "somthing went wrong", success: false });
        }
    }
    catch (err) {
        res.status(400).json({ message: "somthing went wrong", success: false });
    }


}

module.exports = { setContent, updateContent, getContent, validator }
