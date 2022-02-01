import React from 'react'
import SearchBar from './SearchBar'
import styles from './header.module.scss'
import neighborhood from '../../assets/neighborhood.jpg'

const Header = () => {
    return (
        <div className={styles.container}>
            <img src={neighborhood} className={styles.heroImage} />
            <div className={styles.component}>
                <p className="titleLg">Same day delivery, for whatever you want.</p>
                <div className="bodySpacer"></div>
                <SearchBar />
            </div>
        </div>
    )
}

export default Header
