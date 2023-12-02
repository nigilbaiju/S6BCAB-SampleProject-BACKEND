const app = require('express').Router()
const studmodel = require("../model/student");


//For Saving student data

app.post('/snew',(request,response)=>{
    new studmodel(request.body).save();
    response.send("Record saved Sucessfully")
})

//For retriving student data
app.get('/sview',async(request,response)=>{
    var data = await studmodel.find();
    response.send(data)
})

//For update status of student -delete
app.put('/updatestatus/:id',async(request,response)=>{
    let id = request.params.id
    await studmodel.findByIdAndUpdate(id,{$set:{Status:"INACTIVE"}})
    response.send("Record Deleted")
})

//For modifing the details student
app.put('/sedit/:id',async(request,response)=>{
    let id = request.params.id
    await studmodel.findByIdAndUpdate(id,request.body)
    response.send("Record updated")
})

module.exports = app