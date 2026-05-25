const nodemailer = require('nodemailer');
const env = require('../config/env');


const transporter = nodemailer.createTransport({
    service: env.EMAIL_SERVICE,
    auth: {
        user: env.EMAIL_HOST,
        pass: env.EMAIL_PASS
    },
});

const sendMail = async ({ to, subject, html }) => {
    try {
        const info = await transporter.sendMail({
            from : `"Support Team" <${env.EMAIL_HOST}>`,
            to,
            subject,
            html
        });

        console.log("Mail Sent", info.messageId);
        return true;
    } catch (error) {
        console.log("Mail Error:", error.message);
        throw error;
        return false;
    }
}

module.exports = sendMail