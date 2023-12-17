"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

function HeroSection() {
  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
            <span className="text-transparent bg-clip-text bg-gradient-to-r  from-green-700 via-green-500 to-green-400">Hello, I am{" "}</span>
            <br></br>
            <TypeAnimation sequence={["Jacqueese", 1000, "Web Developer", 1000, "Mobile Developer", 1000, "UI Designer", 1000]} wrapper='span' speed={5} repeat={Infinity} />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-large mb-6 lg:text-xl">
            Lorem ipsum do lor sit amet consectetur adipisicing elit. Quisqu
            vo luptatum.
          </p>
          <div>
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-green-700 via-green-500 to-green-400  hover: bg-slate-200 text-white'>Hire Me</button>
            <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br bg-transparent from-green-700 via-green-500 to-green-400 hover:bg-slate-800 text-white  mt-3'>
              <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image src="/images/hero-image.jpeg" alt='hero image' width={500} height={500} className='rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection