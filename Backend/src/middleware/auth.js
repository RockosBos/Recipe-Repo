var jwt = require( "jsonwebtoken");
var UserToken = require( "../models/UserToken.js");
const jwtSecrcetKey = "nsnbdbsdbndbdbdbbdbdbnncxzaa";

const auth = async (req, res, next) => {
  const token = req.header("Authorization").split(' ')[1];
  console.log("tokennnn", token)
  if (!token)
    return res
      .status(403)
      .json({ error: true, message: "Access Denied: No token provided" });

  try {
    const userToken = await UserToken.findOne({ token: token });
    console.log("tokenexits", userToken);
    const currentDate = new Date().toISOString().replace('Z', '+00:00');
    console.log("currentDate",currentDate)
    // Calculate the time difference in milliseconds
    const timeDifference = new Date(currentDate) - new Date(userToken.createdAt);
    console.log("timeDifference",timeDifference)
    // Calculate the time difference in minutes
    const timeDifferenceInMinutes = Math.floor(timeDifference / 60000);

    console.log("timeDifferenceInMinutes",timeDifferenceInMinutes)
    if (!userToken && timeDifferenceInMinutes <= 20) {
      return res
        .status(403)
        .json({ message: "Token is invalid or has expired" });
    }
    const tokenDetails = jwt.verify(token, jwtSecrcetKey);
    console.log("tokenDetails",tokenDetails)
    req.user = tokenDetails;
    next();
  } catch (err) {
    console.log(err);
    res
      .status(403)
      .json({ error: true, message: "Access Denied: Invalid token" });
  }
};

module.exports = auth;
