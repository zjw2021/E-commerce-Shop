import React, { useState, useRef, useContext } from 'react'
import { Button, Select, Pane, Label, Textarea, TextInput } from 'evergreen-ui'
import CartContext from '../../context/cartContext'
import axios from "axios";

const Form = () => {
    const cartContext = useContext(CartContext)
    const { addToCart } = cartContext

    const [cartForm, setCartForm] = useState({
        item: '',
        price: '',
        quantity: ''
    })

    const { item, price, quantity } = cartForm

    const form = useRef()
    const [isLoading, setLoading] = useState(false)

    const resetForm = () => setCartForm({ item: '', price: '', quantity: '' })


    const onChange = e => {
        setCartForm({ ...cartForm, [e.target.name]: e.target.value })
    }

    const onSubmit = e => {
        e.preventDefault();

        if (item === '' || price === '' || quantity === '') return

        setLoading(true)
        addToCart(cartForm)
        setLoading(false)
        resetForm()
    }
    const onOrder = async () => {
        await axios.post('/api/orders', {
          name: "name",
          email: "fake@gmail",
          address: "fake address",
          order: "test"
        })
      }
    return (
        <form ref={form} onSubmit={onSubmit}>
            <p className="titleLg">Add items</p>
            <div className="bodySpacer"></div>
            <div className="bodySpacer"></div>
            <div>
                <Label htmlFor="item" marginBottom={4} display="block" className="bodyMd w-md">Item Link</Label>
                <TextInput type="text" autoComplete="off" size="large" name="item" width="60%" onChange={onChange} value={item} />
            </div>
            <div>
                <Label htmlFor="price" marginBottom={4} display="block" className="bodyMd w-md">Price</Label>
                <TextInput type="text" autoComplete="off" size="large" name="price" width="60%" onChange={onChange} value={price} />
            </div>
            <div>
                <Label htmlFor="quantity" marginBottom={4} display="block" className="bodyMd w-md">Quantity</Label>
                <TextInput type="number" autoComplete="off" size="large" name="quantity" width="60%" min="0" max="20" onChange={onChange} value={quantity} />
            </div>
            <div className="bodySpacer"></div>
            {/* <div className={styles.spacer}>
                <Pane>
                    <Label htmlFor="message" className={styles.label} marginBottom={4} display="block" className="body-md weight-medium">What's your question?</Label>
                    <Textarea autoComplete="off" name="message" onChange={onChange} value={message} width={600} />
                </Pane>
            </div> */}
            {isLoading == true ? (
                <Button type="submit" appearance="primary" size="large" className="bodySm w-md" isLoading>+ Add Item</Button>
            ) : (
                <Button type="submit" appearance="primary" size="large" className="bodySm w-md" onClick={onOrder}>+ Add Item</Button>
            )}
            <div className="bodySpacer"></div>
        </form>
    )

}

export default Form
