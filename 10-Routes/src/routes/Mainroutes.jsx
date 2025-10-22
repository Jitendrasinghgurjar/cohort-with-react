import React from 'react'
import Home from '../components/Home'
import Product from '../components/Product'
import About from '../components/About'
import Service from '../components/Service'
import { Route, Routes } from 'react-router-dom'
import ProductDetail from '../components/ProductDetail'
import ServiceDetail from '../components/ServiceDetail'

const Mainroutes = () => {
  return (
    <div>
         <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/product/Detail/:name' element={<ProductDetail/>}/>
        <Route path='/service' element={<Service/>}>
        <Route path='/service/detail' element={<ServiceDetail/>}/>
        </Route>
        
      </Routes>
    </div>
  )
}

export default Mainroutes