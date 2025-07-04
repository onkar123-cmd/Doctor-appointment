import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* left */}
            <div>
                <img className='mb-5 w-40' src={assets.logo2} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Treat the patient not the disease individualization.</p>
            </div>
            {/* center */}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            {/* right */}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+91-8918942477</li>
                    <li>aritrakundu864@gmail.com</li>
                </ul>
            </div>
        </div>
        {/* <Copyright></Copyright> */}
        <div>
            <hr />
            <p className='py-0 text-sm text-center'>Copyright 2025 @Giridhari - All Right Reserved.</p>
            <p className='py-2 text-sm text-center'>Developed By Onkar Hui❤️</p>
        </div>
    </div>
  )
}

export default Footer
