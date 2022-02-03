import React, { useContext, useState } from 'react'
import Form from './Form'
import YourCart from './YourCart'
import styles from './cart.module.scss'
import Summary from './Summary'

import { Button, Label, Select } from 'evergreen-ui'
import { Link } from 'react-router-dom'

import CartContext from '../../context/cartContext'

const Cart = () => {
    const cartContext = useContext(CartContext)
    const { cart, setIsCheckout, onSetVendor, vendor } = cartContext

    const onChange = (e) => {
        onSetVendor(e.target.value)
    }

    return (
        <div className={styles.container}>
            <div className={styles.component}>
                <Form />
                <Label htmlFor="vendor" marginBottom={4} style={{marginTop: "1rem"}} display="block" className="bodyMd w-md">Select Vendor</Label>
                <Select defaultValue="none" name="vendor" width={280} size="large" onChange={onChange}>
                    <option value="none" disabled hidden>Select a vendor</option>
                    <option value="target">Target</option>
                    <option value="walmart">Walmart</option>
                    <option value="wholefoods">Whole Foods</option>
                    <option value="cvs">CVS</option>
                    <option value="dickssportinggoods">Dick's Sporting Goods</option>
                    <option value="homedepot">Home Depot</option>
                    <option value="simonandsons">Simon & Sons</option>
                    <option value="centrepiecesdesign">Centre Pieces Design</option>
                </Select>

                <Summary />

                {(vendor == null) ?
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
