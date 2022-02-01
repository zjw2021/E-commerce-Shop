const express = require("express");
const router = express.Router();
const { EMAIL, PASSWORD } = require('./config')

const nodemailer = require("nodemailer");
const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    },
  });

router.post("/", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const address = req.body.address;
    const order = req.body.order;

    const mail = {
      from: name,
      to: process.env.EMAIL,
      subject: `New Order ${name}`,
      html: `<p>New order from ${name}</p>
        <p>Email: ${email}</p>
        <p>Address: ${address}</p>
        <p>Order: ${JSON.stringify(order)}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "ERROR", msg: error.message });
      } else {
        res.json({ status: "Message Sent" });
      }
    });
  });

  module.exports = router