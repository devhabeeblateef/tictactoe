import React, {useState} from 'react'
import classes from './Home.module.css'
import Myform from './Myform'

function Form() {
    const [started, setStarted] = useState(true)  
    const maleQuestions = ["What is your Genotype?", "What is your Blood Group",
"How Tall are youy?"]
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
        {started ? "" : <Myform placeholder={
            () => {
                for(let i = 0; i<)
            }
        }/>}
        {started ? "" :<button onClick={start} className={classes.start}>
        Next</button>}
        </center>
    </div>
  )
}

export default Form