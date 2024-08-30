import React, { useState } from 'react'
import Cards from '../../components/display/cards'
import GenreNav from '../../components/display/genreNav'
import styles from '../../assets/css/display/display.module.css'

function Container() {
  const [values, setValues] = useState('')

  const books = async() => {
    const result = await fetch('https://bookstore-server-sxgd.onrender.com')
    const data = await result.json()
    setValues(data)   
  }
  
  return (
    <div className={styles.MainContainer}>
      <div className={styles.DisplayContainer}>
      <section>
        <GenreNav />
      </section>
      <section>
      <h4 className={styles.FeaturedProducts}>Featured Products</h4>
      </section>
      <section className={styles.CardsContainer}>
        {console.log(values)}
        
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </section>
      </div>
    </div>
  )
}

export default Container