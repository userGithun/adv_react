import React from 'react'

function UpdateVariable() {
    let data = "ram"

    const updateData =()=>{
        let data = "shyam"
        alert(data)
    }

    console.log('console renderr')
  return (
    <>
    <h1>HELLO {data}</h1>
    <button onClick={updateData}>update data 1</button>
    </>
  )
}

export default UpdateVariable