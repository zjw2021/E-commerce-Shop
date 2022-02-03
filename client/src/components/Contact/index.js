
import React, { useEffect, useState } from 'react'
import { TextInput, Button } from 'evergreen-ui'
import styles from './footercontact.module.scss'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

//Custom mailchimp form
const CustomForm = ({ status, message, onValidated }) => {

    const [email, setEmail] = useState("")
    const [msg, setMsg] = useState("Want to learn more about Ricardian?")
    const [isLoading, setLoading] = useState(false)

    const onSubmit = e => {
        e.preventDefault();
        email &&
            email.indexOf("@") > -1 &&
            onValidated({
                MERGE0: email,
            });
    }

    const onChange = e => {
        setEmail(e.target.value)
    }

    useEffect(() => {
        if (status === "success") {
            setMsg("Congratulations, you've joined!")
            clearFields();
            setLoading(false)
        }
        if (status === "sending") setLoading(true)
        if (status === "error") {
            setMsg("You're already subscribed!");
            setLoading(false)
            setEmail("")
        }
    }, [status])

    const clearFields = () => {
        setEmail("")
    }


    return (
        <div className={styles.form}>
            <form onSubmit={onSubmit}>
                <ul style={{listStyle: "none"}}>
                    <p className="bodyMd">{msg}</p>
                    <li>
                        <TextInput
                            style={{ marginTop: '0.5rem' }}
                            label="Email"
                            onChange={onChange}
                            type="email"
                            value={email}
                            size="large"
                            placeholder="your@email.com"
                        />
                    </li>
                    <li style={{ marginTop: '1rem' }}>
                        {isLoading == true ? (
                            <Button type="submit" size="large" appearance="primary" className="bodySm w-md" isLoading>Subscribe</Button>
                        ) : (
                            <Button type="submit" size="large" appearance="primary" className="bodySm w-md">Subscribe</Button>
                        )}
                    </li>
                </ul>
            </form>
        </div>
    )

}

// Used for a reference https://dev.to/gedalyakrycer/create-an-email-list-with-react-mailchimp-965
const Contact = () => {
    const url = `https://gmail.us20.list-manage.com/subscribe/post?u=${process.env.MAILCHIMP_U}&id=${process.env.MAILCHIMP_ID}`
    return (
        <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
                <CustomForm
                    status={status}
                    message={message}
                    onValidated={formData => subscribe(formData)}
                />
            )}
        />
    )
}

export default Contact
