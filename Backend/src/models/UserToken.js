const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userTokenSchema = new mongoose.Schema({
    userId: {
       type: mongoose.Schema.ObjectId,
       require: true,
    },
    token: {
       type: String,
       require: true,
    
    },
createdAt:{
    type:Date,
    default:Date.now,
    expires: '14m' 
}});

    

 module.exports = mongoose.model("UserTokenSchema", userTokenSchema);