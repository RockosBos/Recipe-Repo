const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const mutualContact = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
      },
      mutualContacts: [{
        email: {
          type: String,
          required: true,
        },
      }],
    }); 

 module.exports = mongoose.model("mutualContact", mutualContact);