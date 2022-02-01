import React from 'react'
import styles from './howitworks.module.scss'

const Card = ({ step, index }) => {
    return (
        <div className={styles.card}>
            <p className="bodyLg w-md primary">Step #{index + 1}</p>
            <div className="bodySpacer"></div>
            <p className="bodyMd">{step}</p>
        </div>
    )
}

export default Card
