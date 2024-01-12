import Navbar from "../Components/Navbar/Navbar";
import React from 'react'

const About = () => {
  return (
    <div className="bg-gradient-to-b from-black via-purple-900 to-black min-h-screen">
        <Navbar/>
        <div className="pt-[60px]">
        <h1 className='font-bold  text-5xl text-center py-5 text-white'>About Page</h1>
        </div>
    </div>
  )
}

export default About