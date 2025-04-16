import React, { useState } from 'react'

function Internship() {

    const [formData , setFromData]= useState({
        name:"",
        email:"",
        contact:"",
        gender:"",
        address:"",
        college:"",
        branch:"",
        year:""  
    })

    const handlechange =(event)=>{
        const {name,value}=event.target
        const fieldValue = value ;

        setFromData({
            ...formData,
            [name]:fieldValue
        })
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log('From Data:',formData)
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <div>
            <label>Your Name</label>
            <input type="text" name="name" onChange={handlechange} />
        </div>
        <br />
        <div>
            <label>Your Email</label>
            <input type="email" name="email" onChange={handlechange} />
        </div>
        <br />
        <div>
            <label>Your Number</label>
            <input type="number" name="contact" onChange={handlechange} />
        </div>
        <br />
        <div>
            <label>Your Gender</label>
            <select name="gender" onChange={handlechange}>
            <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
        </div>
        <br />
        <div>
            <label>Your Address</label>
            <input type="text" name="address" onChange={handlechange} />
        </div>
        <br />
        <div>
            <label>Your College</label>
            <select name="college" onChange={handlechange}>
            <option value="">Select</option>
                <option value="MPCT">MPCT</option>
                <option value="MITS">MITS</option>
            </select>
        </div>
        <br />
        <div>
            <label>Your Branch</label>
            <select name="branch" onChange={handlechange}>
                <option value="">Select</option>
                <option value="CS">CS</option>
                <option value="IT">IT</option>
                <option value="MBA">MBA</option>
            </select>
        </div>
        <br />
        <div>
            <label>college Year</label>
            <select name="year" onChange={handlechange}>
                <option value="">Select</option>
                <option value="First Year">Frist year</option>
                <option value="Secont Year">Second year</option>
                <option value="Third Year">Third year</option>
                <option value="Final Year ">Final year</option>
            </select>
        </div>
        <br />
        <button type='submit'>Submit</button>
    </form>
    </>
  )
}

export default Internship