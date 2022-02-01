import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Invetory from '../components/Invetory'
import HowItWorks from '../components/HowItWorks'

const Root = () => {
    return (
        <div>
            <Header />
            <HowItWorks />
            <Invetory />
            <Footer />
        </div>
    )
}

export default Root
