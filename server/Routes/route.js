import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Register from "../model/signupSchema.js";
const router = express.Router();

router.post("/signup", async (request, response) => {
  try {
    console.log(request.body);
    const data = request.body;

    const userExist = await Register.findOne({ email: data.email });
    if (userExist) {
      console.log("Email already exist");
      response.status(500).json({ message: "Email already exist" });
    } else if (data.password !== data.confirmPassword) {
      console.log("Password is not matching");
      response.status(422).json({ message: "Password is not matching" });
    } else {
      const userData = new Register(request.body);
      await userData.save();
      console.log("Successful");
      response.status(201).json({ message: "User registered successfully.." });
    }
  } catch (error) {
    response
      .status(500)
      .json({ error: `Error Occured in login post Api at server...${error}` });
  }
});

// Login Api

router.post("/login", async (req, res) => {
  try {
    const data = req.body;
    let user = await Register.findOne({
      email: data.email,
    });
    console.log(user);
    if (user) {
      const passwordMatch = await bcrypt.compare(data.password, user.password);
      if (!passwordMatch) {
        console.log("user is not valid");
        return res.status(401).json("invalid password");
      } else {
        let token = await user.generateAuthToken();

        res.cookie("token", token, {
          expires: new Date(Date.now() + 900000000),
          httpOnly: true,
          secure: true,
        });
        res.status(200).json({ data: user, token: token });
      }
    } else {
      return res.status(400).json({ error: "Invalid Data" });
    }
  } catch (error) {
    res.status(500).json({ error: `Failed due to ${error}` });
  }
});

export default router;
