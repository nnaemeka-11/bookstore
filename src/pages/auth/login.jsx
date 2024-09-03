import React from 'react'
import Login from '../../components/auth/login'
import styles from '../../assets/css/auth/auth.module.css'

function login() {
  return (
    <div className={styles.UserAuth}>   
        <section className={styles.AuthContainer}>
            <h3>Login</h3>
                <Login />
            <p>Don't have an account? <a href='/auth/register' className={styles.SwitchButton}>
                    Register
                </a>
            </p>
        </section>
    </div>
  )
}

export default login