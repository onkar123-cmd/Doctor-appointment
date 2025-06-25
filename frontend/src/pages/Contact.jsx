import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
        <div className='text-center text-2xl pt-10 text-gray-500'>
          <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
        </div>
        <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-medium'>
          <img className='w-full md:max-w-[300px]' src={assets.contact_img} alt="" />
          <div className='flex flex-col justify-center items-start gap-10'>
            <p className='font-semibold text-lg text-gray-600'>OUR CLINIC</p>
            <p className='text-gray-700'>Vivekananda More (Beside LIC Building) <br/> Kaliyaganj, Uttar Dinajpur</p>
            <p className='text-gray-700'>Mob: (+91) 9339152936<br /> Email: aritrakundu864@gmail.com</p>

          </div>
        </div>
    </div>
  )
}

export default Contact