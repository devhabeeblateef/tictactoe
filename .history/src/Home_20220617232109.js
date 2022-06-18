import React from 'react'
import classes from './Home.module.css'
import image from './img/marriage.svg'
function Home() {
  return (
    <Form />
    <div className={classes.home}>
    <h1 className={classes.home__header}>
        Check you and your partner's medical compatibility.
    </h1>
    <p className={classes.home__info}>
        We understand this is important for you guys, it 
        is important for us too!
    </p>
    <div className={classes.button}>
        <button className={classes.button__one}>Get Started</button>
        <button className={classes.button__two}>
        Learn More</button>
    </div>
    <img src={image} alt="Hello"></img>
    </div>
  )
}

export default Home