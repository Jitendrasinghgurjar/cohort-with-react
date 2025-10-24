// 📁 src/context/RecipeContext.jsx
import React, { createContext, useState } from 'react'

// 1️⃣ Named export for context
export const RecipeContext = createContext(null)

// 2️⃣ Default export for provider
const RecipeProvider = ({ children }) => {
  const [data, setData] = useState([])
  console.log(data);
  

  return (
    <RecipeContext.Provider value={{ data, setData }}>
      {children}
    </RecipeContext.Provider>
  )
}

export default RecipeProvider
