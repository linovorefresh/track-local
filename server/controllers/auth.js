import { AWSSES } from "../SES/config.js";
import { emailTemplate } from "../helpers/emailTemplate.js" 
import 'dotenv/config'
import jwt from 'jsonwebtoken';

export const preRegister = async (req, res) => {
    try {

        const { email, password } = req.body;
        const first = 'Testrun';
        const last = 'Name';
        const token = jwt.sign({email, password, first, last}, process.env.JWT_SECRET, {expiresIn: '1h'});
        
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