import React from 'react'
import logo from '../../assets/logo.png'
import styles from '../../assets/css/styles.module.css'

function Header() {
  return (
    <div className={styles.Header}>
        <section className={styles.HeaderLogo}>
            <img src={logo} alt="logo" style={{height: '30px'}}/>
            <h3>BookStore</h3>
        </section>
        <section className={styles.HeaderSearch}>
            <input type="search" name="" id="" placeholder='Search Titles, Authors, Genres' className={styles.Search} />
        </section>
        <section className={styles.HeaderAuth}>
            <button className={styles.Register}>Register</button>
            <button className={styles.Login}>Login</button>
        </section>
    </div>
  )
}

export default Header