import React, { useState } from 'react'

const Read = (props) => {
     const todos = props.todos
    const setTodos = props.setTodos
 
    const rendertodos = todos.map(todo=>{
  return <li style={{color: todo.iscompleted ? "green":"tomato"}}key={todo.id}>{todo.title}</li>
 })
  return (
    <>
          <hr />
       <h1 style={{color: "tomato"}}>Pending todos</h1>
       <ol>{rendertodos}</ol>
    </>
  )
}

export default Read