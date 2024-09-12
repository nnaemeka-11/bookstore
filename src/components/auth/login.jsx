import React, { useReducer } from 'react'
import axios from 'axios'
import { InitialLogin, LoginReducer } from '../utils/reducer'
import {Input, SubmitButton} from '../utils/formElements'
import styles from '../../assets/css/auth/auth.module.css'
import { Link, useNavigate } from 'react-router-dom'

function login() {
    const [state, dispatch] = useReducer(LoginReducer, InitialLogin);
    const navigate = useNavigate()

    const handleSubmit = async() => {
        let isValid = true
        for (const key in state) {
            if (key !== 'errors' && key !== 'response' && state[key].trim() === '') {
              dispatch({ type: 'SET_ERROR', field: key, error: `This field cannot be empty!` });
              isValid = false;
            }
        }
        if(isValid) {
            try {                
                const data =  { user_id:state.user_id, password:state.password}
                const response = await axios.post('https://bookstore-server-sxgd.onrender.com/user/login', data)                            
                dispatch({ type: 'SET_RESPONSE', field: 'response', response:{message: response.data.message, status:response.status }});
                navigate('/')
            } catch (error) {
                dispatch({ type: 'SET_RESPONSE', field: 'response', response:{message: error.response.data.message, status:error.response.status }});                  
            
            }
        };
        
    }
  return (
    <div className={styles.Login}>
        <Input 
            label={'Email or Username'}
            type={'text'}
            name={'user_id'}
            placeholder={'johndoe1'}
            value={state.user_id}
            dispatchType={'user_id'}
            dispatch={dispatch}
            error={state.errors.user_id}
        />
        <Input 
            label={'Password'}
            type={'password'}
            name={'password'}
            placeholder={'*********'}
            value={state.password}
            dispatchType={'password'}
            dispatch={dispatch}
            error={state.errors.password}
        />
        
        <section className={styles.ForgotVerify}>
        <button className={styles.ForgotPasswordButton}>
                    Forgot Password?
        </button>
        {
            state.response && state.response.response.message === 'Verify your email' &&
            
            <Link to={'/auth/verify'} className={styles.VerifyLink}>Verify Email</Link>
        }
        </section>
        

        <SubmitButton
            label={"Login"}
            handleSubmit={handleSubmit}
        />
        {
            !state.response &&
            <span className={styles.ResponseSuccess}><i className={styles.InvisibleResponse}>.</i> </span> 
        }
        {
            state.response && state.response.response.status === 200 &&
                <span className={styles.ResponseSuccess}>    
                    {state.response.response.message}                
                </span>
        }
        {
            state.response && state.response.response.status !== 200 &&
                <span className={styles.ResponseWarning}>    
                    {state.response.response.message} 
                </span>               
        }
    </div>
  )
}

export default login