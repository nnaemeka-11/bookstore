import React from 'react'
import Cards from '../../components/display/cards'
import GenreNav from '../../components/display/genreNav'
import styles from '../../assets/css/display/display.module.css'

function Container() {
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