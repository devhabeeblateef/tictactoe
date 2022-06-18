import React, {useState} from 'react'
import classes from './Home.module.css'
function BrideForm() {
    const [femaleGenotype, setFemaleGenotype] = useState("")
    const [femaleBloodGroup, setFemaleBloodGroup] = useState("")
    const femaleData = []
    const gatherData = (e) => {
        e.preventDefault()
        femaleData.push(femaleGenotype)
        femaleData.push(femaleBloodGroup)
        console.log(femaleData)
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
    <button onClick={gatherData} type="submit" className='btn btn-outline-primary'>
    Check Results</button>
      </form> 
      </center>   
    </div>
  )
}


export default BrideForm
