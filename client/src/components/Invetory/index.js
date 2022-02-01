import React from 'react'
import List from './List'
import { Link } from 'react-router-dom'

const Invetory = () => {
    return (
        <div className="container">
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                <p className="titleMd">Browse Vendors</p>
                <span style={{ display: "flex", flexDirection: "row", alignItems: "center", marginRight: "5rem"}}>
                    <Link to='/cart' className="titleSm link dark">Cart</Link>
                    <Link to='/cart' className="titleSm link dark"><i className="fas fa-shopping-cart" style={{ fontSize: "20px", marginLeft: "0.5rem"}}></i></Link>
                </span>
            </div>
            <List />
        </div>
    )
}

export default Invetory
