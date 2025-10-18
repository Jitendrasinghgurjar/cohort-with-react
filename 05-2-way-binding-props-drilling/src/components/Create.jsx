import React, { useState } from 'react'

const Create = () => {
   const [fullname , setFullname] = useState("")
  
  const changeHandler = (e)=>{
    setFullname(e.target.value)
    console.log(fullname);
  
  }
  const [age,setAge] = useState(18) 
  const submitHandler = (e)=>{
  e.preventDefault()
    console.log("form submitted");
  }
  return (
    <div>
     <h1>register user</h1>
       
      <form onSubmit={submitHandler}>
      <input onChange={changeHandler} value={fullname} type="text" placeholder='fullname' />
      <br /><br />
      <input type="number" placeholder='age' />
      <br />
      <br />
      <button>submit</button>
      </form>   
    </div>
  )
}

export default Create