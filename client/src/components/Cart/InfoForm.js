import React, { useContext, useState, useEffect } from 'react'
import { Button, Select, Pane, Label, Textarea, TextInput } from 'evergreen-ui'
import styles from './cart.module.scss'
import CartContext from '../../context/cartContext'

const InfoForm = () => {
    const cartContext = useContext(CartContext)
    const { fillOutInfo, info } = cartContext

    const [infoForm, setInfoForm] = useState({
        email: '',
        name: '',
        address: '',
        city: '',
        state: '',
        zip: ''
    })
    const { email, name, address, city, state, zip, college, dorm } = infoForm

    const resetForm = () => setInfoForm(
        {
            email: '',
            name: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            college: '',
            dorm: ''
        })


    const onChange = e => {
        setInfoForm({ ...infoForm, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        fillOutInfo(infoForm)
    }, [infoForm])

    return (
        <div>
            <form className={styles.infoForm}>
                <div className={styles.infoFormComponent}>
                    <p className="bodyLg w-md">Shipping Information</p>
                    <div className="bodySpacer"></div>
                    <div>
                        <Label htmlFor="email" marginBottom={4} display="block" className="bodySm">Email</Label>
                        <TextInput type="email" autoComplete="off" size="large" name="email" width="200%" onChange={onChange} value={email} />
                    </div>
                    <div>
                        <Label htmlFor="name" marginBottom={4} display="block" className="bodySm">Name</Label>
                        <TextInput type="text" autoComplete="off" size="large" name="name" width="200%" onChange={onChange} value={name} />
                    </div>
                </div>
                <div className={styles.infoFormComponent}>
                    <span style={{ display: "flex", flexDirection: "row" }}><p className="bodyLg w-md">College Address </p>  <p className="bodySm"> (E.g. Babson College, Forest 302)</p></span>
                    <div className="bodySpacer"></div>
                    <div>
                        <Label htmlFor="college" marginBottom={4} display="block" className="bodySm">College</Label>
                        <TextInput type="text" autoComplete="off" size="large" name="college" width="120%" onChange={onChange} value={college} />
                    </div>
                    <div>
                        <Label htmlFor="dorm" marginBottom={4} display="block" className="bodySm">Dorm</Label>
                        <TextInput type="text" autoComplete="off" size="large" name="dorm" width="120%" min="0" max="20" onChange={onChange} value={dorm} />
                    </div>
                </div>
                <div className="bodySpacer"></div>
            </form>
        </div>
    )
}

export default InfoForm
