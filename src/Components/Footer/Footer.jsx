import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <div className=" flex justify-center items-center h-fit w-full">
            <ul className='flex flex-col md:flex-row justify-center items-center py-[30px] md:h-[100px] h-fit w-full space-y-4 md:space-y-0  md:space-x-5'>
              <Link to='/'>
              <li className='font-semibold text-sm sm:text-2xl text-slate-300 hover:underline hover:text-slate-500 hover:cursor-pointer'>HOME</li>
              </Link>
              <Link to='/fest/CreditsPage'>
              <li className='font-semibold text-sm sm:text-2xl text-slate-300 hover:underline hover:text-slate-500 hover:cursor-pointer'>Credits</li>
              </Link>
              <Link to='/coordinators'>
              <li className='font-semibold text-sm sm:text-2xl text-slate-300 hover:underline hover:text-slate-500 hover:cursor-pointer'>Event Coordinators</li>
              </Link>
              <Link to='/help'>
              <li className='font-semibold text-sm sm:text-2xl text-slate-300 hover:underline hover:text-slate-500 hover:cursor-pointer'>Help and Support Team</li>
              </Link>
            </ul>
        </div>
    </div>
  )
}

export default Footer