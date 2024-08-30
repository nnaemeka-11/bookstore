import React, { useState } from 'react'
import Register from '../../components/auth/register'
import Login from '../../components/auth/login'
import styles from '../../assets/css/auth/auth.module.css'

function userAuth() {
    const [register, setRegister] = useState(true)
    const [login, setLogin] = useState(false)

    const SwitchButton = () => {
        if(register){
            setLogin(true)
            setRegister(false)
        } else{
            setLogin(false)
            setRegister(true)
        }
    }
  return (
    <div className={styles.UserAuth}>
        {
            register && 
            
            <section className={styles.AuthContainer}>
            <h3>Create an account</h3>
            <Register />
            <p>Already have an account? <button 
                                            onClick={SwitchButton}
                                            className={styles.SwitchButton}>
                    Login
                </button>
            </p>
        </section>
        }
        {
            login && 
            <section className={styles.AuthContainer}>
            <h3>Login</h3>
            <Login />
            <p>Don't have an account? <button 
                                                onClick={SwitchButton}
                                                className={styles.SwitchButton}>
                    Register
                </button>
            </p>
        </section>
        }
    </div>
  )
}

export default userAuth