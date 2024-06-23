import React from 'react'
import styles from '../../assets/css/display/style.module.css'
import cart from '../../assets/images/cart.png'
import cartwhite from '../../assets/images/white-cart.png'

function Cards(title, author, genre, image, price) {
  return (
    <div className={styles.MainContainer}>
    <section className={styles.ImageContainer}>
        <img src="https://swiperjs.com/demos/images/nature-1.jpg" className={styles.Image}/>
    </section>
    <section className={styles.Details}>
        <h2 className={styles.Title}>Things Fall Apart</h2>
        <h3 className={styles.Author}>Chinua Achebe</h3>
        <h4 className={styles.Genre}>Fiction</h4>
        
    </section>
    
    <section className={styles.Checkout}>
          <b className={styles.Price}>$32.54</b> 
          <button className={styles.Cart}>
            {/* <img src={cart} alt="cart"   */}
            {/* <img src={cartwhite} alt="cart"  className={styles.CartImage2}/> */}
            <img width="64" height="64" src="https://img.icons8.com/glyph-neue/64/1A1A1A/shopping-cart.png" alt="shopping-cart" className={styles.CartImage}/>
            <img width="64" height="64" src="https://img.icons8.com/glyph-neue/64/FFFFFF/shopping-cart.png" alt="shopping-cart" className={styles.CartImage2}/>
          </button>
          </section>
    </div>
  )
}

export default Cards