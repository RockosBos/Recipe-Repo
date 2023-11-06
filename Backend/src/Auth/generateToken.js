jwt = require('jsonwebtoken');
var UserToken = require('../models/UserToken');
const jwtSecrcetKey ="nsnbdbsdbndbdbdbbdbdbnncxzaa"
const generateToken = async(user)=>{
    try{
        const token = jwt.sign({ email: user.email, fullName: user.fullName, _id: user._id }, jwtSecrcetKey, {expiresIn: "30d"});
        const refreshToken = jwt.sign({ email: user.email, fullName: user.fullName, _id: user._id }, jwtSecrcetKey, {expiresIn: "30d"});
        
       console.log("token",token);
       console.log("refereshToken",refreshToken);

        const userToken =  await UserToken.findOne({userId: user._id}).exec();
        if(userToken) await userToken.deleteOne();
    
        await new UserToken({userId: user._id, token:refreshToken }).save();

        return Promise.resolve({token, refreshToken});
    }catch(err){
        console.log("err",err);
        return Promise.reject(err)

    }
}


module.exports = generateToken;