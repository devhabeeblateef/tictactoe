import React, {useRef} from 'react'
import classes from './Home.module.css'

function Myform({placeholder}) {
    const answerRef = useRef()
  return (
    <div>
    <form>
        <input ref={} className={classes.questions} placeholder={placeholder} />
    </form>
    </div>
  )
}

export default Myform