import React, { useContext } from 'react'
import CartContext from '../../context/cartContext'
import styles from './cart.module.scss'

const YourCart = () => {
    const cartContext = useContext(CartContext)
    const { cart, removeFromCart, } = cartContext

    return (
        <div>
            <p className="titleLg">Your Cart</p>
            <p className="bodyMd">({cart.length}) items</p>
            <div className="bodySpacer"></div>
            <div className="bodySpacer"></div>
            <div className="bodySpacer"></div>
            {cart.length === 0 && <p className="bodyLg">No items in your cart</p>}
            <div className={styles.list}>
                {cart && cart.map((item, index) => {
                    return (
                        <div className={styles.cartCard} key={index}>
                            <div>
                                <p className="bodyLg w-md">{item.item}</p>
                                <div>
                                    <p className="bodyLg">${item.price}</p>
                                    <p className="bodyLg">{item.quantity} Qty</p>
                                </div>
                            </div>
                            <i className="fas fa-times" onClick={() => removeFromCart(parseInt(item.price), item.quantity, index)}></i>
                            {/* <button onClick={() => removeFromCart(index)}>Remove</button> */}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default YourCart
