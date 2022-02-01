import React from 'react'
import styles from './footer.module.scss'

const Hours = () => {
    return (
        <div className={styles.container}>
            <p className="titleLg">Delivery hours</p>
            <div className={styles.hours}>
                <div>
                    <p className="bodyLg w-md">Weekday</p>
                    <span className="bodyLg"><p>1:30pm - 4:00pm</p></span>
                    <span className="bodyLg"><p>8:00pm - 10:00pm</p></span>
                </div>
                <div>
                    <p className="bodyLg w-md">Weekend</p>
                    <span className="bodyLg"><p>11:00am - 6:00pm</p></span>
                </div>
            </div>
        </div>
    )
}

export default Hours
