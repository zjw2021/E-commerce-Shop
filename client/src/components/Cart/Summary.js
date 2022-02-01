import React, { useContext } from 'react'
import CartContext from '../../context/cartContext'

const Summary = () => {
    const cartContext = useContext(CartContext)
    const { total } = cartContext

    const shippingRate = 5.99

    return (
        <div style={{ marginTop: "4rem" }}>
            <p className="titleMd">Order Summary</p>
                <div className="bodySpacer"></div>
            <p className="bodyMd">Subtotal: ${total}</p>
            <p className="bodyMd">Shipping: ${shippingRate}</p>
            <p className="bodyMd">Tax: $0</p>
            <p className="bodyLg w-md">Total (USD) ${(total + shippingRate).toFixed(2)}</p>
            <div className="bodySpacer"></div>
        </div>
    )
}

export default Summary
