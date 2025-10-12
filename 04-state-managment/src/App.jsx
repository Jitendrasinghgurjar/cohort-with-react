// import React from 'react'

// const App = () => {
//   let n = 12
//   let s = "jitendra singh gurjar"
//   let b = true
//   let nu = null
//   let un = undefined
//   let arr = [12, null ,undefined , "jitu", true, false]
//   let obj = {name: "jitu", age:20}

//   return (
//     <div>
//       <h1>Datatypes</h1>
//       <h1>{n}</h1>
//       <h1>{s}</h1>
//       <h1>b:{b? "hello world" : "hello"}</h1>
//     <h1>{nu}</h1>
//     <h1>{un}</h1>
//     <h1>{arr}</h1>
//     <h1>{obj.age}</h1>
//     </div>
//   )
// }

// export default App


// import React from 'react'

// const App = () => {
//   const profiles = [
//     {name: "jitu",age:16},
//     {name: "sachin", age: 90},
//     {name: "gurjar" ,age: 60}
//   ]
//   const updatedprofiles =  profiles.map((profiles,index)=>{
//     return (
//        <li key={index}>
//       <span>{profiles.name}</span>
      
//     </li>
//   )
//   })


    
  
//   return (
//     <div>
//       <h1>render profile</h1>
//       <ol>{updatedprofiles}</ol>
      
//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'

// const App = () => {
//   let username = "jitu"

//   const changeHandler = ()=>{
//     let username = "nitin"
//     console.log(username);

//   }
//   return (
//     <div>
//       <h1>username</h1>
// <h2>{username}</h2>
// <button onClick={changeHandler}>change username</button>
//     </div>
//   )
// }

// export default App


import React, { useState } from 'react'

const App = () => {
  const [username, setUsername] = useState("jitu")
  const changeHandler = ()=>{
    setUsername("nitin")
    
    
  }
  console.log(username);
  return (
    <div>
      <h1>username</h1>
      <h2>{username}</h2>
      <button onClick={changeHandler}>change name</button>
    </div>
  )
}

export default App