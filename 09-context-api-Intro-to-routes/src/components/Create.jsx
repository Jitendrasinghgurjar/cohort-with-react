import React, { useContext, useState } from 'react'
import { nanoid } from 'nanoid'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { todocontext } from '../Wrapper'

const Create = (props) => {
     const  [todos , setTodos] = useContext(todocontext)
    const {register,handleSubmit,reset,formState:{errors}} = useForm()
const submitHandler = (data)=>{
  
  data.isCompleted = false
  data.id = nanoid()
  const copytodos = [...todos]
  copytodos.push(data)
setTodos(copytodos)
toast.success("todo created")
reset()
}
console.log(errors.title);


  return (
    <div className='border w-[60%] p-10'>
        <h1 className='mb-10 font-thin text-2xl'>Set <span className='text-red-400'>Reminders</span> for <br />Tasks</h1>
      <br />
      <form onSubmit={handleSubmit(submitHandler)}>
        <input
      {...register("title",{
        required: "title can not be empty",
      })}
        className=' p-2 border-b w-full text-2xl font-thin outline-0'  type="text" placeholder='title'/>
        <br /><br />
      <small className='font-thin text-red-400'>{errors?.title?.message}</small>
       
       <br />
        <button className='mt-5 text-xl px-10 py-2 border rounded '>Create Todo</button>
       
             </form>
             <br />
    </div>
  )
}

export default Create