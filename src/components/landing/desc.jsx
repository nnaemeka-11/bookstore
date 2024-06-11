import React from 'react'
import styles from '../../assets/css/styles.module.css'

function Desc() {
  return (
    <div className={styles.DescContainer}>
      <h4 className={styles.Title}>Welcome to <b>BookStore</b></h4>
      <h3>Featured Genres from <b>Our Collections</b></h3>
      <button className={styles.GetMore}>Get More...</button>
    </div>
  )
}

export default Desc