import React, { useState } from 'react'
import { nanoid } from 'nanoid'

const Create = (props) => {
    const todos = props.todos
    const setTodos = props.setTodos
     const [title, setTitle] = useState("")
  
    const submitHandler = (e)=>{
    e.preventDefault()
    const newtodo = {
      id:nanoid(),
      title,
      isCompleted: false
    }
  const copytodos = [...todos]
  copytodos.push(newtodo)
  setTodos(copytodos)

  //  setTodos([...todos,newtodo])
    setTitle("")
  }
  return (
    <div>
        <h1>Create tasks</h1>
      <form onSubmit={submitHandler}>
        <input onChange={(e)=>setTitle(e.target.value)}
         type="text"
         value={title}
          placeholder='title' />
           <br /> <br />
   
        <button>Create Todo</button>
       </form>
    </div>
  )
}

export default Create