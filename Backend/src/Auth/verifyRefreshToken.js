import UserToken from "../models/UserToken.js";
import jwt from "jsonwebtoken";
const jwtSecrcetKey ="nsnbdbsdbndbdbdbbdbdbnncxzaa";

const verifyRefreshToken = (refreshToken) => {
	const privateKey = jwtSecrcetKey;

	return new Promise((resolve, reject) => {
		UserToken.findOne({ token: refreshToken }, (err, doc) => {
			if (!doc)
				return reject({ error: true, message: "Invalid refresh token" });

			jwt.verify(refreshToken, privateKey, (err, tokenDetails) => {
				if (err)
					return reject({ error: true, message: "Invalid refresh token" });
				resolve({
					tokenDetails,
					error: false,
					message: "Valid refresh token",
				});
			});
		});
	});
};

module.exports =  verifyRefreshToken;