import React, {useState, useRef} from 'react'
import classes from './Home.module.css'
import Myform from './Myform'

function Form() {
    const [started, setStarted] = useState(true) 
    const [maleGenotype, setMaleGenotype] = useState("")
    const maleQuestions = ["What is your Genotype?", "What is your Blood Group",
"How Tall are you?", "Are you FAT?"]
    const start = () => {
        setStarted(false)
    }

    const showAnswer = () => {
        alert(q)
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
        Start</button> : ""}<br/>

        <input placeholder={maleQuestions[0]} className={classes.questions}
            value={maleGenotype} onChange={(e) => setMaleGenotype(e.target.value)}
        />
        <button onClick={showAnswer} className={classes.start}>Next</button>
        </center>
    </div>
  )
}

export default Form