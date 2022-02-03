import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    FILL_OUT_INFO,
    IS_CHECKOUT,
    PAY_NOW,
    SET_VENDOR
} from './types'

const cartReducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload],
                total: state.total + (parseInt(action.payload.price) * action.payload.quantity)
            }
        case REMOVE_FROM_CART:
            const cartState = [...state.cart]
            cartState.splice(action.payload.index, 1)
            const totalState = state.total - (action.payload.item * action.payload.quantity)
            return {
                ...state,
                cart: cartState,
                total: totalState
            }
        case FILL_OUT_INFO:
            return {
                ...state,
                info: action.payload
            }
        case IS_CHECKOUT:
            return {
                ...state,
                isCheckout: action.payload
            }
        case PAY_NOW:
            return {
                ...state,
                payNow: action.payload
            }
        case SET_VENDOR:
            return {
                ...state,
                vendor: action.payload
            }
        default:
            return state
    }
}

export default cartReducer