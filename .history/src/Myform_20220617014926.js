import React from 'react'
import classes from './Home.module.css'

function Myform({placeholder}) {
  return (
    <div>
    <form>
        <input onSubmit={i} className={classes.questions} placeholder={placeholder} />
    </form>
    </div>
  )
}

export default Myform