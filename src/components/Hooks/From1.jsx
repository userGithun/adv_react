import React, { useState } from 'react'

function From1() {

    const [fromData, setFromData] = useState({
        username:"",
        email:"",
        password:"",
        isSubscribed:"",
        role:""
    })
    // console.log(fromData)

    const handlechange = (event)=>{
        const {name,value,type,checked}=event.target
        const fieldValue = type === 'checkbox' ? checked :value ;
        // console.log(event.target.value)
        // console.log(fieldValue)

        setFromData   ({
            ...fromData, //spread
            [name]:fieldValue //key value
        })
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log("From Data",fromData)
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <div>
            <label>Username:</label>
            <input type="text" name='username' value={fromData.username}  onChange={handlechange}/>
        </div>
        <br />
        <div>
            <label>Email:</label>
            <input type="email" name='email' value={fromData.email}  onChange={handlechange}/>
        </div>
        <br />
        <div>
            <label>Password:</label>
            <input type="password" name='password' value={fromData.password}  onChange={handlechange}/>
        </div>
        <br />
        <div>
            <label>isSubscribed:</label>
            <input type="checkbox" name='isSubcribed' value={fromData.isSubscribed}  onChange={handlechange}/>
        </div>
        <br />
        <div>
            <label>Role:</label>
            <select name="role" value={fromData.role} onChange={handlechange}>

                <option value="">Select Role</option>
                <option value="admin">admin</option>
                <option value="user">user</option>
                <option value="gest">gest</option>

            </select>
        </div>
        <br />

        <button type='submit'>Submit</button>
    </form>
    </>
  )
}

export default From1