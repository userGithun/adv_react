import React, { useEffect, useState } from 'react'

function UseEffect1() {

    const [count, setCount]=useState(0);
    const [data,setData]=useState(100);

    useEffect(()=>{
        console.log('helloCount')
    },[count])
    useEffect(()=>{
        console.log('helloData')
    },[data])
  return (
    <>
    <p>You Clicked {count} Time's</p>
    <p>You data {data} Time's</p>

    <button onClick={()=>setCount(count+1)}>Click to Count</button>
    &nbsp;
    <button onClick={()=>setData(data+1)}>Click to Data</button>
    </>
  )
}

export default UseEffect1