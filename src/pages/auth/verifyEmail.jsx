import React from 'react'
import VerifyEmail from '../../components/auth/verifyEmail'
import styles from '../../assets/css/auth/auth.module.css'


function verifyEmailPage() {
  return (
    <div className={styles.UserAuth}>   
        <section className={styles.AuthContainer}>
                <VerifyEmail />
        </section>
    </div>
  )
}

export default verifyEmailPage