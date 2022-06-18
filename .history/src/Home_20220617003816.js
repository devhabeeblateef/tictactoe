import React from 'react'
import classes from './Home.module.css'

function Home() {
  return (
    <div className={classes.home}>
    <h1 className={classes.home__header}>
        Check you and your partner's medical compatibility.
    </h1>
    <div className={classes.button}>
        <button className={}><a href="index2.html">Get Started</a></button>
        <button class="button__two">Learn More</button>
    </div>
    </div>
  )
}

export default Home