import React from 'react'
import Navbar from '../components/Navbar'
import { PROBLEMS } from '../data/problems'
import { Link } from 'react-router-dom';
import { ArrowBigDown, ArrowBigRight, ArrowRight, Code2Icon } from 'lucide-react';

const ProblemsPage = () => {
  const problems = Object.values(PROBLEMS);
  const easycount = problems.filter(p => p.difficulty === "Easy").length;
  const mediumcount = problems.filter(p => p.difficulty === "Medium").length;
  const hardcount = problems.filter(p => p.difficulty === "Hard").length;

  return (
    <div className='min-h-screen bg-base-200'>
      <Navbar />
      <div className='max-w-6xl mx-auto px-4 py-12'>
        <div>
          <h1 className='text-4xl font-bold mb-2'>Practice Problems</h1>
          <p className='text-base-content/70'>Sharpen your coding skills with these curated problems</p>
        </div>
        <div className='space-y-4 mt-6'>
          {problems.map((problem)=>(
            <Link className='flex flex-col px-4 py-8  rounded-xl bg-base-100 hover:scale-105 duration-200 transition-transform' key={problem.id} to={`/problem/${problem.id}`}>
              <div className='flex justify-between'>
                <div className='flex gap-3'>
                  <div className='p-4 rounded-xl bg-primary/10'>
                    <Code2Icon className='size-6 text-green-500' />
                  </div>
                  <div className='flex flex-col gap-1'>
                    <div className='flex gap-2'>
                      <h2>{problem.title}</h2>
                      <p className={`px-4 text-center rounded-2xl ${problem.difficulty === "Easy" ? "bg-green-500":problem.difficulty === "Medium" ?"bg-yellow-500" : "bg-red-500"} text-sm text-black`}>{problem.difficulty}</p>
                    </div>
                    <p className='text-gray-500 text-sm'>{problem.category}</p>
                  </div>
                </div>
                <div className='flex gap-1  items-center text-green-500'>
                  <p className='text-sm'>Solve</p>
                  <ArrowRight className='size-3' />
                </div>
              </div>
              <p className='text-gray-200 text-sm'>
                {problem.description.text}
              </p>
            </Link>
          ))}
        </div>
        <div className='flex gap-1 items-center px-20 py-8 mt-15 rounded-xl bg-base-100'>
          <div className='border-r border-gray-800 leading-tight w-[300px]'>
            <p className='text-[12px] text-gray-400'>Total Problems</p>
            <span className='text-primary font-bold text-[35px]'>{problems.length}</span>
          </div>
          <div className='border-r border-gray-800 leading-tight w-[320px] pl-2'>
            <p className='text-[12px] text-gray-400'>Easy Problems</p>
            <span className='text-secondary font-bold text-[35px]'>{easycount}</span>
          </div>
          <div className='border-r border-gray-800 leading-tight w-[320px] pl-2'>
            <p className='text-[12px] text-gray-400'>Medium Problems</p>
            <span className='text-yellow-500 font-bold text-[35px]'>{mediumcount}</span>
          </div>
          <div className='leading-tight pr-40 w-[200px] pl-2'>
            <p className='text-[12px] text-gray-400'>Hard Problems</p>
            <span className='text-red-500 font-bold text-[35px]'>{hardcount}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProblemsPage
