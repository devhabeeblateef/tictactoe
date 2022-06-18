import React, {useState, useRef} from 'react'
import classes from './Home.module.css'

    function Form() {
        const [maleGenotype, setMaleGenotype] = useState("")
        const showResult = () => {

            if (maleGenotype == "AA")
            {
                alert("GOOD")
            }
            else if (maleGenotype == "SS")
            {
                alert("BAD")
            }
            else 
            {
                alert("Unknown Genotype")
            }
        }
      return (
        <div>
          <h1 className={classes.home__header}>
            Groom
          </h1> 
          <p className={classes.home__info}>
            Please answer the following questions correctly to get accurate results. 
          </p>
            <form>
          <input type="text" value={maleGenotype} onChange={
            (e) => setMaleGenotype(e.target.value)
          } /> <br/>
          <button onClick={showResult} type='submit' class="btn btn-primary">
          Submit
          </button> 
          </form>    
        </div>
      )
    }
    
    export default Form
