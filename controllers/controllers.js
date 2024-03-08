const twilio = require("twilio");
require("dotenv").config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = twilio(accountSid, authToken);

exports.sendOTP = (req, res) => {
  client.messages
    .create({
      from: process.env.TWILIO_PHONE_NUMBER,
      to: process.env.CELL_PHONE_NUMBER,
      body: "someone has signed up to Manipe",
    })
    .then((message) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error("Error sending OTP:", error);
      res.status(500).send("Error sending OTP");
    });
};
