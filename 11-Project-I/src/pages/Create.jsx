  import { nanoid } from 'nanoid'
  import React, { useContext } from 'react'
  import { useForm } from 'react-hook-form'
    import {RecipeContext} from '../context/RecipeContext'


  const Create = () => {
    const  {data,setData} = useContext(RecipeContext)
      const {register,handleSubmit,reset} = useForm()
      const submitHandler = (recipe)=>{
          recipe.id = nanoid()
          setData([...data, recipe])
          reset()
          
      }
    return (
      <form onSubmit={handleSubmit(submitHandler)}>
          <input className='block border-b outline-0 p-2'
          {...register("image")}
          type="url"
          placeholder='Enter Image Url'
          />
          <small className='text-red-400'>This is how the error is shown</small>
          <input className='block border-b outline-0 p-2'
          {...register("chef")}
          type="text"
          placeholder='chef name'
          />
           <input className='block border-b outline-0 p-2'
          {...register("chef")}
          type="text"
          placeholder='Recipe Title'
          />
          
          <textarea
            className='block border-b outline-0 p-2'
          {...register("description")}
          placeholder='//start from here'
          ></textarea>
        
          <textarea className='block border-b outline-0 p-2'
          {...register("ingredients")}
          placeholder='//write ingredents sperated by comma'
          />
          
            <select className='block border-b outline-0 p-2'
          {...register("category")}
          placeholder='//write instructions sperated by comma'   
          >
          <option value="cat-1">Category 1</option>
          <option value="cat-2">Category 2</option>
          <option value="cat-3">Category 3</option>
          </select>
        
          <button className='mt-5 block bg-gray-900 px-4 py-2 rounded'>Save Recipe</button>
      </form>
    )
  }

  export default Create