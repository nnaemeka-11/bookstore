import React, { useReducer } from 'react'
import { InitialLogin, LoginReducer } from '../utils/reducer'
import {Input, SubmitButton} from '../utils/formElements'
import styles from '../../assets/css/auth/auth.module.css'

function login() {
    const [state, dispatch] = useReducer(LoginReducer, InitialLogin);

    const handleSubmit = async() => {
        console.log(state);
        
    }
  return (
    <div className={styles.Login}>
        <Input 
            label={'Username'}
            type={'text'}
            name={'username'}
            placeholder={'johndoe1'}
            value={state.username}
            dispatchType={'username'}
            dispatch={dispatch}
            // error={state.errors.username}
        />
        <Input 
            label={'Password'}
            type={'password'}
            name={'password'}
            placeholder={'*********'}
            value={state.password}
            dispatchType={'password'}
            dispatch={dispatch}
            // error={state.errors.password}
        />
        <button className={styles.ForgotPasswordButton}>
                    Forgot Password?
        </button>
        <SubmitButton
            label={"Login"}
            handleSubmit={handleSubmit}
        />
    </div>
  )
}

export default login