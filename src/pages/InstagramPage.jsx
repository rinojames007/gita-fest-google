import React from 'react'
import Navbar from '../Components/Navbar/Navbar'

const InstagramPage = () => {
  return (
    <div className="bg-gradient-to-b from-[#161b29] via-purple-900 to-[#161b29] h-full min-h-screen">
        <Navbar/>
        <div className="qr flex items-center justify-center h-full">
          <a href="https://www.instagram.com/utsah_gita?utm_source=qr&igsh=N2pnZGhzN25oc2Mz" target='_blank'>
            <img src="https://i.postimg.cc/8P7fd6dh/inst-qr.jpg" alt="insta qr" className='h-screen w-full'  />
          </a>
        </div>
    </div>
  )
}

export default InstagramPage