import React from 'react'
import classes from './Home.module.css'

function Home() {
  return (
    <div className={classes.home}>
    <h1 className={classes.home__header}>
        Check you and your partner's medical compatibility.
    </h1>
    <p>We know how important this is for you guys, it's 
    important for us too</p>
    </div>
  )
}

export default Home