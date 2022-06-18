import React, {useRef, useState} from 'react'
import classes from './Home.module.css'

function Myform({placeholder}) {
   const [answer, setAnswer] = useState()
  return (
    <div>
    <form>
        <input className={classes.questions} placeholder={placeholder} 
        onChange={(e) => {
            
        }} />
    </form>
    </div>
  )
}

export default Myform