import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import CheckoutComponent from '../components/Cart/Checkout'
import CartContext from '../context/cartContext'

const Checkout = () => {
    const cartContext = useContext(CartContext)
    const { isCheckout } = cartContext

    return (
        <div>
            {isCheckout ?
                <CheckoutComponent />
                : 
                <Navigate to="/" />
            }
        </div>
    )
}

export default Checkout
