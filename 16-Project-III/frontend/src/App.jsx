import axios from './api/axiosconfig'
import React, { useEffect } from 'react'

const App = () => {
  const getproduct = async ()=>{
    try{
      const res = await axios.get('/products')
      console.log(res);
      
    }
    catch(error){
      console.log(error);
      
    }
  }
  useEffect(()=>{
    getproduct()
  },[])
  return (
    <div>
    jitendra singh gurjar
    </div>
  )
}

export default App