import React from 'react'
import img from '../assets/img/ISHAN.jpg';
import { MdDownload } from "react-icons/md";
export const About = () => {
  return (
    <>
      <div className='relative isolate px-8 '>

        <div className='mx-auto max-w-6xl py-10 sm:py-40 lg:pt-10 '>
          <div className='pb-8'>
            <span className='font-bold text-4xl'>About Me</span>
          </div>
          <div class="grid grid-rows-3 grid-flow-col gap-4">
            <div class="lg:row-span-3">
              <img className="h-80 w-96 rounded-2xl" src={img} alt="" />
            </div>
            <div class="lg:row-span-2 lg:col-span-2 p-1 -mt-52 lg:-mt-0">
              <p className='text-xl font-semibold'>Hello, I'm Ishan Nikeshala Nawarathna, a passionate and skilled Software Engineer with extensive experience in Java and PHP. I specialize in developing robust and efficient back-end solutions while also excelling in front-end development with React and React Native. My proficiency in modern CSS frameworks like Bootstrap and Tailwind CSS allows me to create responsive and visually appealing user interfaces.</p><br />
              <p className='text-xl font-semibold'>Throughout my career, I have consistently demonstrated my ability to adapt to new technologies and frameworks, ensuring that I stay at the forefront of the ever-evolving tech landscape. My approach to software development is driven by a commitment to quality, efficiency, and user-centric design.</p>
            </div>
            <div className='pl-1'>
              <button className='bg-slate-400 w-56 h-10 flex items-center justify-center'><MdDownload />Download</button>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
