


import React, { useState } from 'react'
import Create from './components/Create'
import Read from './components/Read'

const App = () => {
 
  const [users,setUsers] = useState([
    {name:"jitu",age:18},
    {name:"gurjar",age:20},
    {name:"rajiv",age:21}
  ])


  


  return (
    <div>
      
     <Create/>
     <Read users = {users} setUsers= {setUsers}/>
    </div>
  )
}

export default App