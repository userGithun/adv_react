import React, { useState } from 'react'

function Userstate() {
    const [data, setdata] = useState('ram')

    const updateData =()=>{
        setdata('shyam')
    }
  return (
    <>
    <h1>HELLO {data}</h1>

    <button onClick={updateData}>Update Data</button>
    <button onClick={()=>setdata('press updata to update')}>press me</button>
    </>
  )
}

export default Userstate