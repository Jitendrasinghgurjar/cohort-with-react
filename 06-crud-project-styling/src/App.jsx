
import React, { useState } from 'react'
import Create from './components/Create'
import Read from './components/Read'

const App = () => {
 
     const [todos,setTodos] = useState([
    {id: 1, title:"kaam kar le bhai",iscompleted: true}
  ])
 

  return (
    <div>
      
     <Create todos = {todos} setTodos={setTodos}/>
     <Read todos = {todos} setTodos={setTodos}/>
    </div>
  )
}

export default App