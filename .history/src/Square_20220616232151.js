import React from 'react'
import classes from './App.module.css'

function Square({value, onClick}) {
  return (
    <div>
    <div onClick={onClick} className={classes.square}>
      {value}
    </div>
    </div>
  )
}

export default Square
