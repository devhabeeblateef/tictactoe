import React, {useState} from 'react'
import classes from './Home.module.css'
import Myform from './Myform'

function Form() {
    const [started, setStarted] = useState(true)  
    const start = () => {
        setStarted(false)
    }
  return (
    <div>
        <h1 className={classes.home__header}>
            Groom
        </h1>
        <p className={classes.home__info}>
        We are going to ask the Groom a few questions.
        Please answer honestly to get accurate results.
        </p>
        <center>
        {started ? <button onClick={start} className={classes.start}>
        Start</button> : ""}
        <Myform placeholder={"What is your "}/>
        </center>
    </div>
  )
}

export default Form