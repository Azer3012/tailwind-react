import React, { useEffect, useState } from 'react'
import Products from '../api/products.json'
import Product from './Product'
const Favorites = () => {
  const [products,setProducts]=useState([])
  useEffect(()=>{
    setProducts(Products)
  },[])
  return (
    <div className='container mx-auto'>
      <h3 className="text-sm font-semibold mb-3">Favoriler</h3>
      <div className="grid grid-cols-8 gap-0.1 rounded-lg overflow-hidden">
        {products?.map(product=><Product key={product?.id} product={product}/>)}
      </div>
    </div>
  )
}

export default Favorites