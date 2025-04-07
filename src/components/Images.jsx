import React from 'react'
import img from '../image/car23.jpg'

function Images() {
  return (
    <>
    <div>Images</div>
    <br />
    <img src={img} alt="" style={{width:"500"}} />
    <br /><br />
    <img src={'/src/image/car23.jpg'} alt="" style={{width:500}} />
    </>
  )
}

export default Images