import { Router } from "express";
import UserToken from "../models/UserToken.js";
import jwt from "jsonwebtoken";
import verifyRefreshToken from "../Auth/verifyRefreshToken.js";

const routerToken= Router();
const jwtSecrcetKey ="nsnbdbsdbndbdbdbbdbdbnncxzaa"

// get new access token
routerToken.post("/", async (req, res) => {
	

	verifyRefreshToken(req.body.refreshToken)
		.then(({ tokenDetails }) => {
			const payload = { _id: tokenDetails._id, roles: tokenDetails.roles };
			const accessToken = jwt.sign(
				payload,
                jwtSecrcetKey,
				{ expiresIn: "14m" }
			);
			res.status(200).json({
				error: false,
				accessToken,
				message: "Access token created successfully",
			});
		})
		.catch((err) => res.status(400).json(err));
});

// logout
routerToken.delete("/", async (req, res) => {
	try {
		const { error } = refreshTokenBodyValidation(req.body);
		if (error)
			return res
				.status(400)
				.json({ error: true, message: error.details[0].message });

		const userToken = await UserToken.findOne({ token: req.body.refreshToken });
		if (!userToken)
			return res
				.status(200)
				.json({ error: false, message: "Logged Out Sucessfully" });

		await userToken.remove();
		res.status(200).json({ error: false, message: "Logged Out Sucessfully" });
	} catch (err) {
		console.log(err);
		res.status(500).json({ error: true, message: "Internal Server Error" });
	}
});

module.exports = routerToken;