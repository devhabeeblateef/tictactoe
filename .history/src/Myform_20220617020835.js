import React, {useRef} from 'react'
import classes from './Home.module.css'

function Myform({placeholder}) {
   
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