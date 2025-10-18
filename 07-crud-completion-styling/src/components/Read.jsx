import React from 'react'

const Read = (props) => {
      const todos = props.todos
    const settodos = props.settodos
    const deleteHandler = (id)=>{
    const fliteredtodo =   todos.filter((todo)=> todo.id !=id)
    settodos(fliteredtodo)
    
        
    }
      const renderTodos = todos.map(todo =>{
    return <li className='flex p-10 bg-gray-200 rounded p-4 justify-between items-center' key={todo.id}> {todo.title}  
    <span onClick={()=>deleteHandler(todo.id)}> delete </span>
    </li>
   })
  
  return (
    <div className='w-[40%] p-10 '>
        <h1> <span className='text-pink-400 text-xl font-thin'>pending</span> todos</h1>
    <ol>{renderTodos}</ol>
    </div>
  )
}

export default Read