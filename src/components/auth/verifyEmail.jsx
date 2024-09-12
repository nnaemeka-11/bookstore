import React, { useState } from 'react'
import axios from 'axios'
import { validateEmail } from '../utils/utils'
import { InputState, SubmitButton } from '../utils/formElements'
import styles from '../../assets/css/auth/auth.module.css'
 

function verifyEmail() {
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [response, setResponse] = useState('')
    const [status, setStatus] = useState('')

    const handleValidation = () => {
        if(email.trim()==='') {
            setError('Field cannot be blank')
            return false
        }
        if (!validateEmail(email)) {
            setError('Invalid Email Format')
            return false
        }
        return true
    }
    const handleSubmit = async() => {
        handleValidation()
        
        if(handleValidation()){            
            try {
                const url = window.location.href.replace('verify', '')
                const data = { email, url} 
                const response = await axios.post('https://bookstore-server-sxgd.onrender.com/user/resend_verify', data)
                setResponse(response.data.message)
                setStatus(response.status)
            } catch (error) {
                setResponse(error.response.data.message)
                setStatus(error.response.status)
            }
        }
    }
    
  return (
    <div className={styles.Login}>
        <h2>Verify Email</h2>
        <section>
        <p>Dear, user.</p>
        <p style={{textAlign: 'justify'}}>A link has been sent to your Email Address. 
            Click on it to verify your email. You can check your spam if none is in your inbox. If 
            you still have no link or link has expired, enter your email
            address and click on the resend link button below.
            
        </p>
        </section>
        <InputState 
            label={'Email'}
            type={'email'}
            name={'email'}
            placeholder={'johndoe@example.xyz'}
            value={email}
            setValue={setEmail}
            setError={setError}
            error={error}
        />
        <SubmitButton 
            label={'Resend Link'}
            handleSubmit={handleSubmit}
        />
        {
            !status &&
            <span className={styles.ResponseSuccess}><i className={styles.InvisibleResponse}>.</i> </span>
        }
        {
            status !== 200 &&
                <span className={styles.ResponseWarning}>    
                    {response} 
                </span>               
        } 
        {
            status === 200 &&
                <span className={styles.ResponseSuccess}>    
                    {response}
                </span>
        }    
    </div>
  )
}

export default verifyEmail