    import React, { useState } from 'react'
    import { nanoid } from 'nanoid'

    const Create = (props) => {
        const todos = props.todos
        const settodos = props.settodos
        const [title, setTitle] = useState("")
    const submitHandler = (e)=>{
    e.preventDefault()
    const newtodo = {
        id:nanoid(),
        title:title,
        isCompleted:false
    }
    
    const copytodos = [...todos]
    copytodos.push(newtodo)
    settodos(copytodos);

    setTitle("")
}
const buttoncss = {
    color:"white",
    padding:"10px",
    backgroundColor: "blue"
}
    return (
        <div className='border w-[60%] p-10 text-center'>
    <h1 className='text-5xl text-thin mb-10 font-thin'>Set <span className='text-red-400'>Reminders</span> <br /> for task</h1>
    <form onSubmit={submitHandler}>
        <input className='border-b w-full text-2xl font-thin outline-0' value = {title} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder='title' /> 
        <br />
        <br />
    

        <button className='text-xl px-10 py-2 border rounded mt-5 bg-blue-100'>Create todo</button>

        </form>
        </div>
    )
    }

    export default Create