import React from 'react'
import styles from '../../assets/css/auth/auth.module.css'
import { RouteButton } from '../utils/formElements'
 

function verifyResponse() {    
  return (
    <div className={styles.verifyResponse}>
        <h3>Email Verification Successful</h3>
        <RouteButton 
            label={'Login'}
            path={'/auth/login'}
        />
    </div>
  )
}

export default verifyResponse