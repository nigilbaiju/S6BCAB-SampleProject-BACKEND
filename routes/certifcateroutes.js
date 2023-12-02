const certmodel = require("../model/certdetails");
const app = require('express').Router()
const multer = require('multer');

const storage = multer.memoryStorage(); // Store images in memory
const upload = multer({ storage: storage });

// For saving certificatedetails
app.post('/certnew', upload.single('certphoto'), async (request, response) => {
    const { sid, qualification } = request.body
    const newdata = new certmodel({
        sid,
        qualification,
        certphoto: {
            data: request.file.buffer,
            contentType: request.file.mimetype,
        }
    })
    await newdata.save();
    response.status(200).json({ message: 'Certificate added successfully' });
}
)

module.exports = app