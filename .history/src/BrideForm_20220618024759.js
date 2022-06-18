import React, {useState, useRef} from 'react'
import classes from './Home.module.css'
function BrideForm() {
    const [femaleGenotype, setFemaleGenotype] = useState("")
    const [femaleBloodGroup, setFemaleBloodGroup] = useState("")
    const femaleData = []

    const gatherData = (e) => {
        if (inputRef.current.value == "")
            {
                e.preventDefault()
                alert("Please fill the form completely")
                femaleData = []
            }
            else 
            {
            femaleData.push(femaleGenotype)
            femaleData.push(femaleBloodGroup)
            alert("Bride Data Captured")
            }
        }

  return (
    <div>
      <h1 className={classes.home__header}>
        Bride
      </h1> 
      <p className={classes.home__info}>
        Please answer the following questions correctly to get accurate results. 
      </p>
      <center>
        <form>
      <input 
            type="text" 
             placeholder='Enter Genotype e.g AA, AS, SS' 
             value={femaleGenotype} 
             onChange={ (e) => setFemaleGenotype(e.target.value) } 
              required/> 
    <input 
            type="text" 
            placeholder="Enter Blood Group" 
            value={femaleBloodGroup} 
            onChange={(e) => setFemaleBloodGroup(e.target.value) } 
             required/> <br/><br/><br/>
    <button onClick={gatherData} type="submit" className='btn btn-outline-danger'>
    Check Result
    </button>
      </form> 
      </center>   
    </div>
  )
}


export default BrideForm
