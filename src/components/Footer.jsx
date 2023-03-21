import React from 'react'
import { GiPalmTree } from 'react-icons/gi'

const Footer = () => {
  return (
    <div className='max-w-[1140px] w-full py-8 m-auto border-t-4'>
        <div className='flex items-center m-auto justify-center'>
            <GiPalmTree size={35} className='text-[var(--primary-dark)] mr-2'/>
            <h1 className='text-2xl font-bold text-gray-600'>TRAVELER'S OASIS</h1>
        </div>
     </div>
  )
}

export default Footer