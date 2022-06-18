import React from 'react'
import classes from './Home.module.css'

function Home() {
  return (
    <div className={classes.home}>
    <h1 className={classes.home__header}>
        Check you and your partner's medical compatibility.
    </h1>
    <p className={classes.home__info}>
        We understand this is important for you guys, it 
        is important for us too!
    </p>
    <div className={classes.button}>
        <button className={classes.button__one}><a href="index2.html">Get Started</a></button>
        <button className={classes.button__two}>
        Learn More</button>
    </div>
    <img src="imag" alt="Hello" srcset="" />
    </div>
  )
}

export default Home