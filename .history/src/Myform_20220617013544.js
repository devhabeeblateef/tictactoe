import React from 'react'
import classes from './Home.module.css'

function Myform({placeholder}) {
  return (
    <div>
    <form>
        <input className={classes.questions} placeholder={placeholder} />
    </div>
  )
}

export default Myform