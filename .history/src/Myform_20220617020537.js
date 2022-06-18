import React, {useRef} from 'react'
import classes from './Home.module.css'

function Myform({placeholder answ}) {
    const answerRef = useRef()
   
  return (
    <div>
    <form>
        <input ref={answerRef} className={classes.questions} placeholder={placeholder} />
    </form>
    </div>
  )
}

export default Myform