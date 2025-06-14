import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={isDarkMode ? assets.logo_dark : assets.logorg} alt='footer' className='w-36 mx-auto mb-2' />

        {/* <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='mail' className='w-6'/>
            akmalmhdofficial@gmail.com
        </div> */}
      </div>
      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-5'>
        <p>© 2025 Akmal Muhammed. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
          <li><a target='_blank' href="https://github.com/Akmalmhd">GitHub</a></li>
          <li><a target='_blank' href="https://www.instagram.com/akml._i?igsh=MXZwMmJuMTg3eXNqMg==">Instagram</a></li>
          <li><a target='_blank' href="www.linkedin.com/in/akmal-muhammed-8b7b9a238">LinkedIn</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
