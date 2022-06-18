import React, {useState, useRef} from 'react'
import classes from './Home.module.css'

    function Form() {
        const [maleGenotype, setMaleGenotype] = useState("")
      return (
        <div>
          <h1 className={classes.home__header}>
            Groom
          </h1> 
          <p className={classes.home__info}>
            Please answer the following questions correctly to get accurate results. 
          </p>
            <form>
          <input 
                type="text" 
                 placeholder='Enter Genotype e.g AA, AS, SS' 
                 value={maleGenotype} 
                 onChange={ (e) => setMaleGenotype(e.target.value) } 
                 /> 
        <input 
                type="text" 
                placeholder="Enter Blood Group" 
                value={maleGenotype} 
                onChange={(e) => setMaleGenotype(e.target.value) } 
                />
          </form>    
        </div>
      )
    }
    
    export default Form
