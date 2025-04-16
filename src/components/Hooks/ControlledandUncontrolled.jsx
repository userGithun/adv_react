import React, { useState } from 'react'

function ControlledandUncontrolled() {

    const [fname, setFname] = useState('code')
    
    const getname = (e) =>{
        console.log(e.target.value)
    }
  return (
    <>
    <form action="">
        <label htmlFor="">Enter firstname</label>
        <input type="text" onChange={getname} />
    </form>
    </>
  )
}

export default ControlledandUncontrolled