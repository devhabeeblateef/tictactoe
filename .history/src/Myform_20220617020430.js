import React, {useRef} from 'react'
import classes from './Home.module.css'

function Myform({placeholder}) {
    const answerRef = useRef()
    console.log(answerRef.current)
  return (
    <div>
    <form>
        <input ref={answerRef} className={classes.questions} placeholder={placeholder} />
    </form>
    </div>
  )
}

export default Myform