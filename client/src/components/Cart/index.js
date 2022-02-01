import React, { useContext } from 'react'
import Form from './Form'
import YourCart from './YourCart'
import styles from './cart.module.scss'
import Summary from './Summary'

import { Button } from 'evergreen-ui'
import { Link } from 'react-router-dom'

import CartContext from '../../context/cartContext'

const Cart = () => {
    const cartContext = useContext(CartContext)
    const { cart, setIsCheckout } = cartContext
    return (
        <div className={styles.container}>
            <div className={styles.component}>
                <Form />
                <Summary />

                {cart.length === 0 ?
                    <Button className="bodySm w-md" width="60%" type="submit" appearance="primary" size="large" disabled>Checkout</Button>
                    :
                    <Link to="/checkout" className="link">
                        <Button className="bodySm w-md" width="60%" type="submit" appearance="primary" size="large" onClick={() => setIsCheckout()}>Checkout</Button>
                    </Link>
                }
            </div>
            <div className={styles.component}>
                <YourCart />
            </div>
        </div>
    )
}

export default Cart
