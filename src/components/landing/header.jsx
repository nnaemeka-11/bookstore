import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import styles from '../../assets/css/landing/styles.module.css'

function Header() {
  return (
    <div className={styles.Header}>
        <Link to="/"><section className={styles.HeaderLogo}>
            <img src={logo} alt="logo" style={{height: '30px'}}/>
            <h3>BookStore</h3>
        </section></Link>
        <section className={styles.HeaderSearch}>
            <input type="search" name="" id="" placeholder='Search Titles, Authors, Genres' className={styles.Search} />
        </section>
        <section className={styles.HeaderAuth}>
        <Link to="/auth/register"><button className={styles.Register}>Register </button></Link>
          <Link to="/auth/login"><button className={styles.Login}>Login</button></Link>
        </section>
    </div>
  )
}

export default Header