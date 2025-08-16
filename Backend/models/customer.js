const mongoose = require("mongoose");

const customerSchema= new mongoose.Schema({

    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        trim:true,
        unique:true,
    },
    address:{
        type:String,
        required:true,
        trim:true,
    },
    role:{
        type:String,
        required:true,
    },
    balance:{
        type:Number,
        required:false,
    },
    password:{

        type:String,
        required:true,
        minlength:6,

    },

    

},{ timestamps: true });

module.exports=mongoose.model("Customer",customerSchema)