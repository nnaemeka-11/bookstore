import React, { useReducer } from 'react'
import axios from 'axios'
import { InitialLogin, LoginReducer } from '../utils/reducer'
import {Input, SubmitButton} from '../utils/formElements'
import styles from '../../assets/css/auth/auth.module.css'

function login() {
    const [state, dispatch] = useReducer(LoginReducer, InitialLogin);

    const handleSubmit = async() => {
        console.log(state);
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
                dispatch({ type: 'SET_RESPONSE', field: 'response', response: response.data.message });
            } catch (error) {
                dispatch({ type: 'SET_RESPONSE', field: 'response', response: error.response.data.message});                  
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
        
        <button className={styles.ForgotPasswordButton}>
                    Forgot Password?
        </button>
        <SubmitButton
            label={"Login"}
            handleSubmit={handleSubmit}
        />
        <span className={styles.Response}>    {state.response}                
        <i className={styles.InvisibleResponse}>.</i> </span>
    </div>
  )
}

export default login