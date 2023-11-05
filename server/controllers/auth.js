import 'dotenv/config'
import jwt from 'jsonwebtoken';
import { nanoid } from 'nanoid'
import { AWSSES } from "../SES/config.js";
import { emailTemplate } from "../helpers/emailTemplate.js" 
import { hashPassword, comparePassword } from "../helpers/auth.js"
import User from '../models/user.js';
import validator from 'email-validator'


export const preRegister = async (req, res) => {
    try {

        const { email, password } = req.body; console.log(req.body)

        // validation for valid email
        if(!validator.validate(email)) {
            return res.json({ error: "A valid email is required" })
        }
        if(!password) {
            return res.json({ error: "A password is required" })
        }

        const user = await User.findOne({ email })
        // if(user) {
        //     return res.json({ error: "Email is already taken" })
        // }

        const token = jwt.sign({email, password}, process.env.JWT_SECRET, {expiresIn: '1h'});

        AWSSES.sendEmail( 
            emailTemplate(
                email,
                `
                <p> Clicking the link below will activate your accouont. </p>
                <a href="${process.env.CLIENT_URL}/auth/account-activate/${token}"> Activate Your Account </a>
                `,
                process.env.REPLY_TO,
                'Activate Your Account'
            ), 
            (err, data) => {
                if (err) {
                    console.log("Provide a valid email address", err);
                    return res.json({ ok: false });
                  } else {
                    console.log("Check email to complete registration", data);
                    return res.json({ ok: true });
                  }
            }
        )
    } catch (err) {
        console.log(err);
        return res.json({ error: "Somethings wrong. Try again."})
    }
}

export const register = async (req, res) => {
    try {
        const { email, password, first, last } = jwt.verify(req.body.token, process.env.JWT_SECRET);
        const hashedPassword = await hashPassword(password);

        const user = await new User({
            username: nanoid(6),
            email,
            password: hashedPassword
        }).save()

        const token = jwt.sign({ _id: user._id}, process.env.JWT_SECRET, { expiresIn: "1h"});
        const refreshToken = jwt.sign({ _id: user._id}, process.env.JWT_SECRET, { expiresIn: "4d"});

        return res.json({
            token, 
            refreshToken, 
            user
        })
    } catch (err) {
        console.log(err);
        return res.json({ error: "Something went wrong. Try again" })
    }
}