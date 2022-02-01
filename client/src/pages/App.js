import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import RootPage from './Root'
import CartPage from './Cart'
import CheckoutPage from './Checkout';
import ConfirmationPage from './Confirmation';

import CartState from '../context/CartState'


function BrowserRoutes() {
    return <Routes>
        <Route exact path='/' element={<RootPage />} />
        <Route exact path='/cart' element={<CartPage />} />
        <Route exact path='/checkout' element={<CheckoutPage />} />
        <Route exact path='/confirmation' element={<ConfirmationPage />} />
    </Routes>
}

function App() {
    return (
        <Router>
            <CartState>

                <BrowserRoutes />
            </CartState>
        </Router>
    )
}

export default App