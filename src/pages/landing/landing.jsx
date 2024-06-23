import React from 'react'
import Carousel from '../../components/landing/carousel'
import styles from '../../assets/css/landing/landing.module.css'
import Desc from '../../components/landing/desc'
import Header from '../../components/landing/header'
import Footer from '../../components/landing/footer'

function Landing() {
  return (
    <>
        <div>
            <Header />
        </div>
        <div className={styles.Container}>
            <div className={styles.Desc}><Desc /></div>
            <div className={styles.Carousel}><Carousel /></div>
        </div>
        <div>
          <Footer />
        </div>
    </>
  )
}

export default Landing