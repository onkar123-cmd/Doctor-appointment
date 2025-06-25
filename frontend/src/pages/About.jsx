import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
        <div className='text-center text-2xl pt-10 text-gray-500'>
          <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
        </div>
        <div className='my-10 flex flex-col md:flex-row gap-12'>
          <img className='w-full md:max-w-[360px]' src={assets.about_image_2} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-[20px] font-medium text-gray-600'>
            <p>Welcome to Giridhari Homeo Clinic, your trusted partner in managing your healthcare needs conveniently and efficiently. Here, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
            <p>We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, We are always here to support you every step of the way.</p>

          </div>
        </div>
    </div>
  )
}

export default About