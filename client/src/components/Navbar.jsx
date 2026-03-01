import { UserButton } from '@clerk/clerk-react';
import { BookOpenIcon, LayoutDashboardIcon, Sparkles } from 'lucide-react'
import React from 'react'
import {Link, useLocation} from 'react-router-dom'

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => {
    return path === location.pathname
  }
  return (
    <nav className='bg-base-100/80 backdrop-blur-md border-b border-primary/20 sticky top-0 z-50 shadow-lg'>
      <div className='w-min-screen mx-[50px] p-4 flex items-center justify-between'>
          <Link to={"/"} className='flex items-center gap-3 hover:scale-105 transition-transform duration-200'>
            <div className='size-10 rounded-md bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center shadow-lg'>
              <Sparkles className='size-6 text-white'/>
            </div>
            <div className='flex flex-col'>
              <span className='bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-black text-xl'>
                CodeMeet
              </span>
              <span className='text-xs font-medium  text-gray-400'> 
                Code Together
              </span>
            </div>
          </Link>
          <div className='flex items-center gap-1'>
            <Link to={"/problems"} className={`hover:scale-105 active:scale-95 px-4 py-2.5 rounded-lg transition-all duration-200 ${isActive("/problems") ? "bg-primary text-primary-content":"text-base-content/70 hover:text-base-content hover:bg-base-200"}`}> 
            <div className='flex gap-1 items-center'>
              <BookOpenIcon className='size-4' />
              <span className='font-medium hidden sm:inline'>Problems</span>
            </div>
            </Link>
            <Link to={"/dashboard"} className={`hover:scale-105 active:scale-95 px-4 py-2.5 rounded-lg transition-all duration-200 ${isActive("/dashboard") ? "bg-primary text-primary-content":"text-base-content/70 hover:text-base-content hover:bg-base-200"}`}> 
            <div className='flex gap-1 items-center'>
              <LayoutDashboardIcon className='size-4' />
              <span className='font-medium hidden sm:inline'>Dashboard</span>
            </div>
            </Link>
            <div className=''>
              <UserButton />
            </div>
          </div>
      </div>
    </nav>
  )
}

export default Navbar
