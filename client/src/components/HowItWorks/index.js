import React from 'react'
import Card from './Card'
import styles from './howitworks.module.scss'

const HowItWorks = () => {
    const steps = [
        {
            step: "Visit our vendor websites and find what you want"
        },
        {
            step: "Copy product link into the Ricardian Shopping cart"
        },
        {
            step: "Pay and wait for your delivery to come"
        }
    ]
    // For deliverys less than 1 mile, delivery is $1 
    return (
        <div className={styles.container}>
            <p className={`${styles.title} titleLg`}>How it works</p>
            <div className={styles.list}>
                {steps && steps.map((step, index) => {
                    return <Card step={step.step} index={index} key={index} />
                })}
            </div>
        </div>
    )
}

export default HowItWorks
