import React from 'react'

function BrideForm() {
    const [femaleGenotype, setFemaleGenotype] = useState("")
    const [femaleBloodGroup, setFemaleBloodGroup] = useState("")
    const maleData = []
    const gatherData = (e) => {
        e.preventDefault()
        maleData.push(maleGenotype)
        maleData.push(maleBloodGroup)
        console.log(maleData)
    }

  return (
    <div>
      <h1 className={classes.home__header}>
        Groom
      </h1> 
      <p className={classes.home__info}>
        Please answer the following questions correctly to get accurate results. 
      </p>
      <center>
        <form>
      <input 
            type="text" 
             placeholder='Enter Genotype e.g AA, AS, SS' 
             value={maleGenotype} 
             onChange={ (e) => setMaleGenotype(e.target.value) } 
              required/> 
    <input 
            type="text" 
            placeholder="Enter Blood Group" 
            value={maleBloodGroup} 
            onChange={(e) => setMaleBloodGroup(e.target.value) } 
             required/> <br/><br/><br/>
    <button onClick={gatherData} type="submit" className='btn btn-outline-primary'>Next</button>
      </form> 
      </center>   
    </div>
  )
}


export default BrideForm
