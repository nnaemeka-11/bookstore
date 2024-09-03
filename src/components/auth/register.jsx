import React, { useReducer } from 'react'
import { initialState, RegisterReducer } from '../utils/reducer'
import { sendEmail, validateEmail, validatePassword } from '../utils/utils'
import {Input, SubmitButton} from '../utils/formElements'
import styles from '../../assets/css/auth/auth.module.css'
import axios from 'axios'

function signUp() {
    const [state, dispatch] = useReducer(RegisterReducer, initialState);

    const handleSubmit = async() => {
        let isValid = true

        for (const key in state) {
            if (key !== 'errors' && key !== 'response' && key !== 'err_response' && state[key].trim() === '') {
              dispatch({ type: 'SET_ERROR', field: key, error: `This field cannot be empty!` });
              isValid = false;
            }
        }
        if (isValid && !validateEmail(state.email)) {
            dispatch({ type: 'SET_ERROR', field: 'email', error: 'Invalid email format!' });
            isValid = false;
          }
        else if (isValid && !validatePassword(state.password)) {
        dispatch({
            type: 'SET_ERROR',
            field: 'password',
            error:
            'Strong Password: 1 lowercase, 1 uppercase, 1 number, 1 special character',
        });
        isValid = false;
        }
        if(isValid && (state.password !== state.confirm_password)){
            dispatch({ type: 'SET_ERROR', field: 'confirm_password', error: 'Passwords do not match' });
            isValid = false;
        }
        
        if(isValid) {
            const { fullname, username, email, password} = state 
            
            const result = await axios({
                method: 'post',
                url: 'https://bookstore-server-sxgd.onrender.com/user/register',
                data:{fullname,username,email,password}
            })            
            if(result.status===201){
                const {email, verifyUrl} = result.data                               
                const response = await sendEmail(email, verifyUrl)                 
                if(response){
                    dispatch({ type: 'SET_RESPONSE', field: 'response', response: 'Account created. Verify you Email' });
                    console.log('Success');
                } else{
                    dispatch({ type: 'SET_ERR_RESPONSE', field: 'err_response', err_response: 'Something went wrong' });
                }      
            }else if (result.status===201){
                dispatch({ type: 'SET_ERR_RESPONSE', field: 'err_response', response: result.data.message });
            } else{
                dispatch({ type: 'SET_ERR_RESPONSE', field: 'err_response', err_response: 'Something went wrong' });
            }   
        };    
    }
  return (
    <div className={styles.SignUp}>
        <Input 
            label={'Full Name'}
            type={'text'}
            name={'fullname'}
            placeholder={'John Doe'}
            value={state.fullname}
            dispatchType={'fullname'}
            dispatch={dispatch}
            error={state.errors.fullname}
        />
        <Input 
            label={'Username'}
            type={'text'}
            name={'username'}
            placeholder={'johndoe1'}
            value={state.username}
            dispatchType={'username'}
            dispatch={dispatch}
            error={state.errors.username}
        />
        <Input 
            label={'Email'}
            type={'text'}
            name={'email'}
            placeholder={'johndoe@example.xyz'}
            value={state.email}
            dispatchType={'email'}
            dispatch={dispatch}
            error={state.errors.email}
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
        <Input 
            label={'Confirm Password'}
            type={'password'}
            name={'confirm_password'}
            placeholder={'*********'}
            value={state.confirm_password}
            dispatchType={'confirm_password'}
            dispatch={dispatch}
            error={state.errors.confirm_password}
        />
            <span className={styles.Response}>{state.response} 
                <i className={styles.InvisibleResponse}>Account created</i> </span>
        <SubmitButton
            label={"Register"}
            handleSubmit={handleSubmit}
        />
    </div>
  )
}

export default signUp