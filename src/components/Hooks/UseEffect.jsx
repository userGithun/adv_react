import React, { useEffect, useState } from 'react'

function UseEffect() {

    const [count, setCount]= useState(0)
    const [data, setData]  = useState(100)

    const getApi =() =>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
             .then(response => response.json())
             .then(json => console.log(json))
    }

    useEffect(()=>{
        getApi()
        
        console.log('hello render useEffer')
    },[])

  return (
    <>
    <h1>You clicked {count} Time's</h1>
    <h1>You Clicked {data} Time's</h1>
    <br /><br />
    <button onClick={()=>{setCount(count + 1)}}>Click me</button>
    &nbsp; &nbsp;
    <button onClick={()=>{setData(data + 1)}}>Click me</button>
    </>
  )
}

export default UseEffect