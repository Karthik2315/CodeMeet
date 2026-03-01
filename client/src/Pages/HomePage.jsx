import React from 'react'
import { Link } from 'react-router-dom'
import { CheckIcon, Edit2, Sparkles, UsersIcon, VideoIcon, ZapIcon } from 'lucide-react';
import { SignInButton } from '@clerk/clerk-react';

const HomePage = () => {
  return (
    <div className='bg-gradient-to-br from-base-100 via-base-200 to-base-300 min-h-screen'>
      <nav className='bg-base-100/80 backdrop-blur-md border-b border-primary/20 sticky top-0 z-50 shadow-lg py-4'>
        <div className='max-w-7xl mx-auto flex items-center justify-between'>
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
          <SignInButton mode='modal'>
            <button className='group px-6 py-3 bg-gradient-to-r from-primary via-accent to-secondary rounded-xl text-white font-semibold text-sm shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 duration-300 cursor-pointer transition-all flex items-center'>
              <span>Get Started</span>
            </button>
          </SignInButton>
        </div>
      </nav>
      {/* Hero section */}
      <div className='max-w-7xl mx-auto px-4 py-20'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <div className='space-y-8'>
            <div className='px-3 py-1 bg-gradient-to-r from-primary to-secondary flex items-center gap-1 text-black rounded-xl w-fit font-semibold'>
              <ZapIcon className='size-4' />
              Real-time Collaboration
            </div>
            <h1 className='text-5xl lg:text-7xl font-black leading-23'>
              <span className='flex bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent'>Code Together,</span>
              <span className='text-base-content'>Learn Together</span>
            </h1>
            <p className='text-xl text-base-content/70 leading-relaxed max-w-xl'>The ultimate platform for collabarative coding interviews and pair programming.Connect face-to-face, code in real-time, and ace your technical interviews</p>
            <div className='flex gap-3'>
              <div className='flex items-center gap-2 px-2 py-1 rounded-xl bg-transparent text-white font-medium  border border-white'><CheckIcon className='size-4 text-green-500' />Live Video Chat</div>
              <div className='flex items-center gap-2 px-2 py-1 rounded-xl bg-transparent text-white font-medium  border border-white'><CheckIcon className='size-4 text-green-500' />Code Editor</div>
              <div className='flex items-center gap-2 px-2 py-1 rounded-xl bg-transparent text-white font-medium  border border-white'><CheckIcon className='size-4 text-green-500' />Multi-Language</div>
            </div>
            <div className='flex flex-wrap gap-4'>
              <SignInButton mode='modal'>
                <button className='btn btn-primary btn-lg hover:scale-105 active:scale-95 duration-200 transition-transform'>
                  Starting Code Now
                </button>
              </SignInButton>
            </div>
          </div>
          <img src='/hero.png' className='w-full rounded-3xl shadow-2xl border-4 border-base-100 hover:scale-105 duration-300 transition-transform'/>
        </div>
      </div>
      <div className='max-w-7xl mx-auto px-4 py-20'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold mb-4'>Everthing you need to <span className='text-green-300'>Succeed</span></h1>
          <p className='text-lg text-base-content/70 max-w-2xl mx-auto'>Powerfull features designed to make your coding interviews seamless and productive</p>
        </div>
        <div className='flex flex-wrap justify-between mt-15'>
          <div className='flex flex-col items-center bg-base-100 px-8 py-10 rounded-2xl space-y-2'>
            <div className='bg-primary/10 p-3 rounded-2xl'>
              <VideoIcon className='size-6 text-green-400' />
            </div>
            <h1 className='text-white text-[20px] font-bold'>HD Video Call</h1>
            <p className='max-w-[300px] mx-auto text-center text-[13px] text-base-content/70'>Crystal clear video and audio for seamless communication during interviews</p>
          </div>
          <div className='flex flex-col items-center bg-base-100 px-15 py-10 rounded-2xl space-y-2'>
            <div className='bg-primary/10 p-3 rounded-2xl'>
              <Edit2 className='size-6 text-green-400' />
            </div>
            <h1 className='text-white text-[20px] font-bold'>Live Code Editor</h1>
            <p className='max-w-[300px] mx-auto text-center text-[13px] text-base-content/70'>Collaboration in real-time with syntax highlighting and multiple language support</p>
          </div>
          <div className='flex flex-col items-center bg-base-100 px-15 py-10 rounded-2xl space-y-2'>
            <div className='bg-accent/10 p-3 rounded-2xl'>
              <UsersIcon className='size-6 text-green-400' />
            </div>
            <h1 className='text-white text-[20px] font-bold'>Easy Collaboration</h1>
            <p className='max-w-[300px] mx-auto text-center text-[13px] text-base-content/70'>Share your screen,discuss solutions, and learn from each other in real-time</p>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default HomePage
