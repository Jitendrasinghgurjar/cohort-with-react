

const App = () => {

const handleClick = ()=>{
  alert("button clicked")
}

const handleparamsclick = (msg)=>{
  alert(msg)
}

  return ( 
<>

   <h1>hello world</h1>
  <h2>jitu gurjar</h2>
<button onClick={handleClick}>click</button>
<button onClick={()=>handleparamsclick("raat andheri ha bujh gaye diye")}>click(params)</button>
  
</>
  )
   
  
}

export default App