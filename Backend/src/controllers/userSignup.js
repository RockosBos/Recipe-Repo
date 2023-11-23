var express = require("express");
var router = express.Router();
var User = require("../models/User");
var UserRecipe = require("../models/userRecipe");
var MutualContact = require("../models/mutualContact");
var generateToken = require("../Auth/generateToken");
jwt = require("jsonwebtoken");
bcrypt = require("bcrypt");
var auth = require("../middleware/auth.js");

router.post("/signup", function (req, res, next) {
  console.log(req.body);
  var personInfo = req.body;
  personInfo.password = bcrypt.hashSync(req.body.passWord, 10);
  let user = new User({
    firstName: personInfo.firstName,
    lastName: personInfo.lastName,
    email: personInfo.email,
    hashPassword: personInfo.password,
    contactNumber: personInfo.contactNumber,
  });

  user
    .save()
    .then((result) => {
      const MutualContacts = new MutualContact({
        email: user.email,
        mutualContacts: [],
      });
      
      MutualContacts
      .save()
      .then((result) => {
        res.json({
            message: "User Added successfully",
          });
      })
      .catch((e) => {
        res.json({
          message: e,
        });
      });
    })
    .catch((e) => {
      res.json({
        message: e,
      });
    });
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    const match = await bcrypt.compare(req.body.passWord, user.hashPassword);
    console.log(match);
    if (!user || !match) {
      console.log("user", user);
      return res
        .status(401)
        .json({ message: "Authentication failed. Invalid user or password." });
    }

    const { token, refreshToken } = await generateToken(user);
    console.log(token);
    console.log(refreshToken);
    //const token = jwt.sign({ email: user.email, fullName: user.fullName, _id: user._id }, jwtSecrcetKey);
    return res.status(200).json({
      error: false,
      token: token,
      refreshToken: refreshToken,
      message: "Logged in sucessfully",
    });
  } catch (err) {
    return res.status(500).json({ message: "Internal server error." });
  }
});



router.post("/mutualContact", auth, async (req, res) => {
  const userData = req.user;
  console.log(userData);
  console.log(req.body)
  try {
    const userExist = await User.findOne({ email: userData.email });
    if (userExist) {
        // Add a new mutual contact to the existing contact
        for (const email of req.body.MutualContacts) {
            MutualContact.mutualContacts.push({ email });
          }
       // MutualContact.mutualContacts.push({ email: 'newcontact@example.com' });
  
        // Save the updated contact document
        MutualContact.save((saveErr) => {
          if (saveErr) {
            console.error(saveErr);
          } else {
            console.log('New mutual contact added to the existing contact');
            res.json({
                message: "New mutual contact added to the user contact",
              });
          }})  
  }
  
}
catch (err) {
    return res.status(500).json({ message: "Internal server error." });
  }}
);



router.post("/recipe", auth, (req, res) => {
  const userData = req.user;
  console.log(userData);
  console.log(req.body);
  let userRecipe = new UserRecipe({
    email: userData.email,
    recipeTitle: req.body.recipeTitle,
    recipeDescription: req.body.recipeDescription,
  });
  userRecipe
    .save()
    .then((result) => {
      res.json({
        message: "Recipe Added successfully",
      });
    })
    .catch((e) => {
      res.json({
        message: e,
      });
    });
});

router.get("/recipe/get", auth, (req, res) => {
  const userData = req.user;
  console.log(userData);
  console.log(req.body);
  UserRecipe
  .find({email : userData.email})
  .then((result) => {
    console.log(result)
    res.json({
          userRecipe: result
    });
  })
   
    .catch((e) => {
      res.json({
        message: e,
      });
    });
});



router.delete("/recipe/delete", auth, (req, res) => {
  const userData = req.user;
  console.log(userData);
  console.log(req.body);
  UserRecipe
  .deleteOne({recipeTitle : req.body.recipeTitle})
  .then((result) => {
    console.log(result)
    res.json({
          userRecipe: result
    });
  })
   
    .catch((e) => {
      res.json({
        message: e,
      });
    });
});

router.get("/profile", function (req, res, next) {
  console.log("profile");
  User.findOne({ unique_id: req.session.userId }, function (err, data) {
    console.log("data");
    console.log(data);
    if (!data) {
      res.redirect("/");
    } else {
      //console.log("found");
      return res.render("data.ejs", { name: data.username, email: data.email });
    }
  });
});

router.get("/logout", function (req, res, next) {
  console.log("logout");
  if (req.session) {
    // delete session object
    req.session.destroy(function (err) {
      if (err) {
        return next(err);
      } else {
        return res.redirect("/");
      }
    });
  }
});



module.exports = router;
