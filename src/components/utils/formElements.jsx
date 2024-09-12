import React, { useState } from 'react'
import styles from '../../assets/css/utils/utils.module.css'
import { Link } from 'react-router-dom';

function Input({label, type, placeholder, name, value, dispatch, dispatchType, error}) {
  const handleDispatch = (e) =>{
    const { name, value } = e.target;
    dispatch({ type: dispatchType, field: name, value });
  }

  return (
    <div>
      <section className={styles.cardContainer}>
            <label htmlFor={name}>{label}</label>
            <input 
                type={type} 
                name={name} 
                id={name}
                value={value} 
                onChange={handleDispatch}
                placeholder={placeholder}/>
                <span className={styles.ErrorMessage}> 
                  <p className={styles.Invisible}>20</p>
                  {error}</span>
      </section>
    </div>
  )
}

function InputState({label, type, placeholder, name, value, setValue, error, setError}) {
  const handleValue = (e) =>{
    setError('')
    setValue(e.target.value)
  }
  return (
    <div>
      <section className={styles.cardContainer}>
            <label htmlFor={name}>{label}</label>
            <input 
                type={type} 
                name={name} 
                id={name}
                value={value} 
                onChange={handleValue}
                placeholder={placeholder}/>
                <span className={styles.ErrorMessage}> 
                  <p className={styles.Invisible}>20</p>
                  {error}</span>
      </section>
    </div>
  )
}

function SubmitButton({label, handleSubmit}) {
  return (
      <button 
              onClick={handleSubmit}
              className={styles.ButtonContainer}>
                {label}</button>
  )
}

function RouteButton({label, path}) {
  return (
         <Link to={path}>
              <button className={styles.ButtonContainer}>
                {label}
              </button>
          </Link>  
  )
}

export {Input, InputState, SubmitButton, RouteButton}