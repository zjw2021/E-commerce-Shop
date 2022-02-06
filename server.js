const express = require("express");
const app = express();

const cors = require("cors");
const path = require('path');
require('dotenv').config();


const stripe = require("stripe")(`${process.env.STRIPE_KEY_BACKEND}`);
app.use(express.static("public"));
app.use(express.json());

app.use(cors());

const mailer = require('./mailer')
app.use("/api/orders", mailer);


app.get('/secret', async (req, res) => {
  const intent = // ... Fetch or create the PaymentIntent
    res.json({ client_secret: intent.client_secret });
});

app.post("/api/create-payment-intent", async (req, res) => {
  const { amount } = req.body;
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: "usd",
    payment_method_types: ['card']
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});


app.use(express.static('./client/dist'))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/dist/index.html'));
});
const PORT = process.env.PORT || 8081 
app.listen(PORT, () => console.log('Server is running...'));