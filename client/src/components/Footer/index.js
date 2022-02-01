import React from 'react'
import Hours from './Hours'
import styles from './footer.module.scss'

const Footer = () => {
    return (
        <div>
            <Hours />
            <footer className={styles.footer}>
                <p className="bodyMd">© 2022 Ricardian</p>
                <a className="link bodyMd dark" href="https://ricardian.net">Company</a>
                <a className="link bodyMd dark" href="https://ricardian.net/contact">Contact</a>
            </footer>
        </div>
    )
}

export default Footer
