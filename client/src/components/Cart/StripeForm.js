import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from 'evergreen-ui'
import {
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import Summary from "./Summary";
import OrderSummary from "./OrderSummary";
import InfoForm from "./InfoForm";
import CartContext from "../../context/cartContext";

import emailjs, { init } from '@emailjs/browser';
init(`user_V6XwjEU6JN2AQ2hOBYyLR`);

export default function StripeForm() {

  const cartContext = useContext(CartContext)
  const { cart, info, payNow, onPayNow, total, vendor } = cartContext

  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${window.location.origin}/confirmation`,
        // return_url: `${window.location}/complete`
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
    }

    setIsLoading(false);
  };

  const onOrder = async () => {
    // await axios.post('/api/orders', {
    //   name: info.name,
    //   email: info.email,
    //   address: info.college + ' ' + info.dorm,
    //   order: cart
    // })
    const orderRecipt = {
      name: info.name,
      email: info.email,
      address: info.college + ' ' + info.dorm,
      order: JSON.stringify(cart),
      size: cart.length,
      subtotal: total,
      total: (total + 5.99).toFixed(2),
      vendor: vendor
    }

    emailjs.send(`service_8n7e75n`, `template_thvk7nu`, orderRecipt, `user_V6XwjEU6JN2AQ2hOBYyLR`)
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
  }

  return (
    <div className="container" style={{ marginTop: "0rem" }}>
      <div>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          <Summary />
          <OrderSummary />
        </div>
        <InfoForm />
      </div>
      {payNow ? (
        <form id="payment-form" onSubmit={handleSubmit}>
          <PaymentElement id="payment-element" />
          {message && <div id="payment-message" className="bodyMd">{message}</div>}
          <div className="bodySpacer"></div>
          <div className="bodySpacer"></div>
          {isLoading ? (
            <Button type="submit" appearance="primary" size="large" className="bodySm w-md" isLoading>Order</Button>
          ) : (
            <Button type="submit" appearance="primary" size="large" className="bodySm w-md" onClick={onOrder}>Order</Button>
          )}
        </form>)
        : (
          <div style={{ display: "flex", alignContent: "center" }}>
            <Button appearance="primary" size="large" className="bodySm w-md" onClick={() => onPayNow()}>Pay Now</Button>
            <p className="bodyLg" style={{ margin: "0 1.5rem" }}>Or</p>
            <Link to='/confirmation'>
              <Button size="large" className="bodySm w-md" onClick={onOrder}>Pay Later</Button>
            </Link>
          </div>
        )}
    </div>
  );
}