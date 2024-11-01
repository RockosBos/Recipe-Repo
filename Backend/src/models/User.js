const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
    firstName: {
       type: String,
       require: true,
       trim: true,
       min: 3,
       max: 20,
    },
    lastName: {
       type: String,
       require: true,
       trim: true,
       min: 3,
       max: 20,
    },
    email: {
       type: String,
       require: true,
       trim: true,
       unique: true,
       lowercase: true,
    },
    hashPassword: {
       type: String,
       require: true,
    },
    contactNumber: {
       type: String,
    },},{ timestamps: true });

    userSchema.methods.comparePassword = function(password) {
      return bcrypt.compareSync(password, this.hash_password);
    };

 module.exports = mongoose.model("User", userSchema);