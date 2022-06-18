import React, {useRef} from 'react'
import classes from './Home.module.css'

function Myform({placeholder answerRef}) {
    const answerRef = useRef()
    answerRef
   
  return (
    <div>
    <form>
        <input ref={answerRef} className={classes.questions} placeholder={placeholder} />
    </form>
    </div>
  )
}

export default Myform