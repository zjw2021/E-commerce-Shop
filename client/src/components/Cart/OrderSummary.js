import React, { useContext } from 'react'
import CartContext from '../../context/cartContext'

const OrderSummary = () => {
    const cartContext = useContext(CartContext)
    const { cart } = cartContext

    return (
        <div>
            {cart && cart.map((item, index) => {
                return (
                    <div key={index} style={{ display: "flex", flexDirection: "row", alignItems: "center", marginLeft: "8rem" }}>
                        <p className="bodyMd w-md" style={{ paddingRight: "1rem" }}>x{item.quantity}</p>
                        <p className="bodyMd">{item.item}</p>
                    </div>
                )
            })}
            <div className="bodySpacer"></div>
        </div>
    )
}

export default OrderSummary
