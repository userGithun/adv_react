import React, { useState } from 'react'

function UsersateCount() {

    const [count, setCount] = useState(0)

  return (
    <>
    <h1>You clicked {count} time's </h1>
    <button onClick={()=>setCount(count + 1)}>Click me</button>

    </>
  )
}

export default UsersateCount