import React from 'react'
import classes from './Home.module.css'

function Form() {
  return (
    <div>
        <h1 className={classes.home__header}>
            Groom
        </h1>
        <p className={classes.home__info}>
        We are going to ask the Groom a few questions.
        Please answer honestly to get accurate results.
        </p>

        <button className={classes.start}>
            <span className={classes.start}>
            Start</span></button>
    </div>
  )
}

export default Form