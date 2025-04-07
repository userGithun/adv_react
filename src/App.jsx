import React, { useState } from 'react'
import UpdateVariable from './components/UpdateVariable'
import Userstate from './components/Userstate'
import UsersateCount from './components/UsersateCount'
import Props12 from './components/Props12'
import Props from './components/Props'
import HideShowAndToggle from './components/HideShowAndToggle'
import CSSstyling from './components/CSSstyling'
import ConditionalRendering from './components/ConditionalRendering'
import Images from './components/Images'
import UseEffect from './components/Hooks/UseEffect'

const App = () => {

  let data = 'ravi'
  const [count,setCount] = useState(0)

  return (
    <>
    {/* <UpdateVariable/> */}
    {/* <Userstate/> */}
    {/* <UsersateCount/> */}
    {/* <Props12 name={'ram'} d={data} /> */}
    {/* <Props  d={data} c={count}/> */}
    {/* <HideShowAndToggle/> */}
    {/* <CSSstyling/> */}
    {/* <ConditionalRendering/> */}
    {/* <Images/> */}

    <UseEffect/>
    </>
  )
}

export default App