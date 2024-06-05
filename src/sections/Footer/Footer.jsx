import React from 'react'
import styles from './FooterStyles.module.css'

const Footer = () => {
    return (
        <section id='footer' className={styles.container}>
            <p>
                &copy; 2024 Sahil Siddiki.
                <br />
                All rights reserved.
            </p>
        </section>
    )
}

export default Footer