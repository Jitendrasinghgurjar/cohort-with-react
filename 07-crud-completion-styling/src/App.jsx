
import React from 'react'
import { useState } from 'react'
import Create from './components/Create'
import Read from './components/Read'

const App = () => {
   const [todos,settodos]  = useState([
    {id:1,title:"kaam kar lebhai",isCompleted:true},
   ])
 
  
 
  
  return (
    <div className='flex w-screen h-screen bg-white-700 p-10'>
 
<Create todos={todos} settodos={settodos}/>
<Read todos={todos} settodos={settodos}/>
    
    </div>
  )
}

export default App