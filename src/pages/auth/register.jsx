import React from 'react'
import Register from '../../components/auth/register'
import styles from '../../assets/css/auth/auth.module.css'

function userAuth() {
    
  return (
    <div className={styles.UserAuth}>     
        <section className={styles.AuthContainer}>
            <h3>Create an account</h3>
            <Register />
            <p>Already have an account? <a href='/auth/login' className={styles.SwitchButton}>
                    Login
                </a>
            </p>
        </section>
    </div>
  )
}

export default userAuth