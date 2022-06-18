import React, {useState, useRef} from 'react'
import classes from './Home.module.css'

    function Form() {
      return (
        <div>
          <h1 className={classes.home__header}>
            Groom
          </h1> 
          <p className={classes.home__info}>
            Please answer the following questions correctly to get accurate results. 
          </p>      
        </div>
      )
    }
    
    export default Form
