const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userRecipe = new mongoose.Schema({
    email: {
       type: String,
       require: true,
    },
    recipeTitle: {
       type: String,
       require: true
    },
    recipeDescription: {
       type: String,
       require: true,
       lowercase: true,
    }});

 module.exports = mongoose.model("userRecipe", userRecipe);