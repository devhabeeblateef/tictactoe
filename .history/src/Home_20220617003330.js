import React from 'react'
import classes from './Home.module.css'

function Home() {
  return (
    <div className={classes.home}>
    <h1 className={classes.home__header}>
        Check you and your partner's medical compatibility.
    </h1>
    <p className={classes.home__info}>We know how important this is to you guys, it's 
    important to us too</p>
    </div>
  )
}

export default Home