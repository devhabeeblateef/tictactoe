import React from 'react'
import classes from './Home.module.css'

function Home() {
  return (
    <div className={classes.home}>
    <h1>Hello World</h1>
    <button className='btn btn-primary'>Hello</button>
    </div>
  )
}

export default Home