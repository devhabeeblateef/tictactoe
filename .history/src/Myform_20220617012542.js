import React from 'react'
import classes from './Home.module.css'

function Myform({question}) {
  return (
    <div>
        <p className={classes.home}>{question}</p>
    </div>
  )
}

export default Myform