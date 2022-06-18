import React from 'react'
import classes from './Home.module.css'

function Myform({placeholder}) {
  return (
    <div>
    <form>
        <input onS className={classes.questions} placeholder={placeholder} />
    </form>
    </div>
  )
}

export default Myform