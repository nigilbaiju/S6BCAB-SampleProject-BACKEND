const mongoose=require("mongoose")



let sc=mongoose.Schema;
const certschema = new sc({
    sid:{type:mongoose.Schema.Types.ObjectId,ref:'students'},
    qualification:String,
    certphoto:{
        data : Buffer,
        contentType:String,
    }
    
});

var certmodel =mongoose.model("certificate",certschema)
module.exports =certmodel;

