import React, {useRef} from 'react'
import classes from './Home.module.css'

function Myform({placeholder answerRef}) {
    const answerRef = useRef()
   
  return (
    <div>
    <form>
        <input ref={answerRe} className={classes.questions} placeholder={placeholder} />
    </form>
    </div>
  )
}

export default Myform