import React from 'react'
import {AiOutlinePlus} from 'react-icons/ai'

const Product = ({product}) => {
    const {title,image,alt,price}=product
  return (
    <div className='bg-white flex flex-col gap-y-1 items-center text-center p-3 relative'>
        <img src={image} alt={title} />
        <div className='text-sm font-semibold text-brand-color'>{price}</div>
        <div className='text-sm font-semibold text-gray-900'>{title}</div>
        <div className='text-sm font-semibold text-gray-500'>{alt}</div>
        <button className='absolute right-3 top-3 rounded-lg text-brand-colors w-8 h-8 flex items-center justify-center border border-gray-200 hover:text-white hover:bg-brand-color'>
            <AiOutlinePlus/>
        </button>
    </div>
  )
}

export default Product