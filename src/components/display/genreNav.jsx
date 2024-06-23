import React from 'react'
import styles from '../../assets/css/display/style.module.css'

function GenreNav() {
  return (
    <div>
        <ul className={styles.NavContainer}>
            <li><button className={styles.NavButtons}>Biography</button></li>
            <li><button className={styles.NavButtons}>Fiction</button></li>
            <li><button className={styles.NavButtons}>Health & Fitness</button></li>
            <li><button className={styles.NavButtons}>History</button></li>
            <li><button className={styles.NavButtons}>Mystery</button></li>
            <li><button className={styles.NavButtons}>Politics & Current Affairs</button></li>
            <li><button className={styles.NavButtons}>Religion</button></li>
            <li><button className={styles.NavButtons}>Checkout</button></li>
        </ul>
    </div>
  )
}

export default GenreNav