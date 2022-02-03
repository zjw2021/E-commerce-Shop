import React, { useContext } from 'react'
import { Fragment } from 'react'
import Contact from '../components/Contact'
import CartContext from '../context/cartContext'

const Confirmation = () => {
    const cartContext = useContext(CartContext)
    const { payNow } = cartContext
    console.log(payNow)
    return (
        <div className="container">
            <p className="titleMd">Success, your order has been placed.</p>
            {!payNow &&
                <div style={{ margin: "2rem 0 2rem 0" }}>
                    <p className="bodyLg">You will recieve an email when your order is delivered. Please be present if you chose the <span className="w-md">Pay Later</span> option.</p>
                    <br />
                    <p className="bodyMd w-md primary">We accept cash, Venmo, or Cashapp.</p>
                    <p className="titleMd w-md" style={{ marginTop: "2rem" }}>Thank You!</p>
                </div>
            }
            <Contact />
        </div>
    )
}

export default Confirmation
