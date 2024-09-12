import React from 'react'
import VerifyResponse from '../../components/auth/verificationResponse'
import styles from '../../assets/css/auth/auth.module.css'


function VerifySuccess() {
  return (
    <div className={styles.UserAuth}>   
        <section className={styles.AuthContainer}>
                <VerifyResponse />
        </section>
    </div>
  )
}

export default VerifySuccess