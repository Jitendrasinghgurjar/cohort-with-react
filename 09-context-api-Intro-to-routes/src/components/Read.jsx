import React, { useContext } from 'react'
import { toast } from 'react-toastify'
import {todocontext} from '../Wrapper'

const Read = () => {
  
    const[todos , setTodos] = useContext(todocontext)

    
   
    const DeleteHandler= (id)=>{
        const filtedtodo = todos.filter((todo)=>todo.id !==id)
        setTodos(filtedtodo)
        toast.error("todo deleted");  
        
    }
    
const rendertodos = todos.map((todo)=>{
   return <li  key={todo.id} className='flex justify-between p-4 bg-gray-900 rounded items-center'><span className='mb-4 text-xl font-thin'>{todo.title}</span>
   <button className='text-sm font-thin text-red-400' onClick={()=>DeleteHandler(todo.id)}>delete</button></li>
})

  return (
    <div className='w-[40%] p-10'>
         
             <h1 className= 'mb-10 font-thin text-2xl'><span className='text-pink-400'>Pending</span> Todos</h1>
             <ol>{rendertodos}</ol>
      
    </div>
  )
}

export default Read