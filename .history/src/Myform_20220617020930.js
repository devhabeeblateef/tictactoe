import React, {useRef, useState} from 'react'
import classes from './Home.module.css'

function Myform({placeholder}) {
   const [answer, setAnswer] = useState(Array(9).fill(null))
  return (
    <div>
    <form>
        <input className={classes.questions} placeholder={placeholder} 
        onChange={(e) => {
            setAnswer(e.target.value)
        }} />
    </form>
    </div>
  )
}

export default Myform