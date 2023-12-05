const certmodel = require("../model/certdetails");
const app = require('express').Router()
const multer = require('multer');

const storage = multer.memoryStorage(); // Store images in memory
const upload = multer({ storage: storage });

// For saving certificatedetails
app.post('/certnew', upload.single('certphoto'), async (request, response) => {
    try {
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
                res.status(200).json({ message: 'certificate added successfully' });
        }
    catch (error) 
    {
                response.status(500).json({ error: 'Internal Server Error' });
    }
}
)


//For Certificate view

app.get('/certview', async (request, response) => {

    const result = await certmodel.aggregate([
      {
        $lookup: {
          from: 'students', // Name of the other collection
          localField: 'sid', // field of item
          foreignField: '_id', //field of category
          as: 'stud',
        },
      },
    ]);
  
    response.send(result)
  })
module.exports = app