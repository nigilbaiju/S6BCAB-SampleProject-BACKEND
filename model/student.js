const mongoose=require("mongoose")

let sc=mongoose.Schema;
const studschema = new sc({
    Admno:String,
    Sname:String,
    Age:Number,
    Status:String
});

var studmodel =mongoose.model("Student",studschema)
module.exports =studmodel;

