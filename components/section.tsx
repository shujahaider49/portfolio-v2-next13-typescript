"use client"

import React, { useEffect } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { FaGithub } from "react-icons/fa6";
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';

const Section = () => {
  const word = ["JavaScript","React Js Developer" , "Next Js Developer"]

  return (
    <>
    <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 ">
<div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
  <div className="mt-5 py-14 max-w-xl text-center mx-auto">
    <h1 className="block mb-4 font-bold text-white text-6xl lg:text-6xl dark:text-gray-200">
      Hello My Name <br />is <br />
      <span className='text-transparent bg-clip-text bg-gradient-to-tr from-[#FF8660] to-[#8000FF]'>Shuja Haider</span>
    </h1>
    <h3>
      Frontend  &lt;<span className='text-pink-600'>web <span className='text-white'>&#47;</span>&gt; </span> Developer
    </h3>
  </div>

  <div className="mt-5 max-w-3xl text-center mx-auto">
    <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#FF8660] to-[#8000FF] dark:text-gray-400">
      <Typewriter words={word} loop={true} />
    </p>
  </div>

  <div className="mt-8 gap-3 flex justify-center">
    <Link
      className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-pink-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-4 dark:focus:ring-offset-gray-800"
      href="https://github.com/shujahaider49"
    >
      <FaGithub />
      Continue with Github
    </Link>
  </div>
</div>
</div>
</>
  )
}

export default Section
