import React, { useReducer } from 'react'
import axios from 'axios'
import CartContext from './cartContext'
import cartReducer from './cartReducer'
import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    FILL_OUT_INFO,
    IS_CHECKOUT,
    PAY_NOW,
    SET_VENDOR
} from './types'


const CartState = props => {
    const initialState = {
        cart: [],
        info: null,
        total: 0,
        isCheckout: false,
        payNow: false,
        vendor: null
    }

    const [state, dispatch] = useReducer(cartReducer, initialState)

    const addToCart = async (item) => {
        try {
            dispatch({
                type: ADD_TO_CART,
                payload: item
            })
        } catch (err) {
            console.log(err.msg)
        }
    }

    const removeFromCart = async (item, quantity, index) => {
        const data = { item, quantity, index }
        try {
            dispatch({
                type: REMOVE_FROM_CART,
                payload: data
            })
        } catch (err) {
            console.log(err.msg)
        }
    }

    const fillOutInfo = async (info) => {
        try {
            dispatch({
                type: FILL_OUT_INFO,
                payload: info
            })
        } catch (err) {
            console.log(err.msg)
        }
    }

    const setIsCheckout = () => {
        dispatch({
            type: IS_CHECKOUT,
            payload: true
        })
    }

    const onPayNow = () => {
        dispatch({
            type: PAY_NOW,
            payload: true
        })
    }

    const onSetVendor = (vendor) => {
        dispatch({
            type: SET_VENDOR,
            payload: vendor
        })
    }
    
    return (
        <CartContext.Provider
            value={{
                cart: state.cart,
                total: state.total,
                info: state.info,
                isCheckout: state.isCheckout,
                payNow: state.payNow,
                vendor: state.vendor,
                addToCart,
                removeFromCart,
                fillOutInfo,
                setIsCheckout,
                onPayNow,
                onSetVendor
            }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartState