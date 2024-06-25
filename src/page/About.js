import React from 'react'
import img from '../assets/img/ISHAN.jpg';
import { MdDownload } from "react-icons/md";
export const About = () => {
  return (
    <>
      <div className='relative isolate px-8 '>

        <div className='mx-auto max-w-6xl lg:py-0 py-10 sm:py-40 lg:pt-10 '>
          <div className='pb-8'>
            <span className='font-bold text-4xl'>About Me</span>
          </div>
          <div class="grid lg:grid-rows-3 grid-rows-12 grid-flow-col lg:gap-4 ">
            <div class="lg:row-span-3 h-80">
              <img className="lg:h-96 lg:w-96 h-auto w-max rounded-2xl" src={img} alt="" />
            </div>
              <p className='text-xl font-semibold'>Hello, I'm Ishan Nikeshala Nawarathna, a passionate and skilled Software Engineer with extensive experience in Java and PHP. I specialize in developing robust and efficient back-end solutions while also excelling in front-end development with React and React Native. My proficiency in modern CSS frameworks like Bootstrap and Tailwind CSS allows me to create responsive and visually appealing user interfaces.</p>
              <p className='text-xl font-semibold'>Throughout my career, I have consistently demonstrated my ability to adapt to new technologies and frameworks, ensuring that I stay at the forefront of the ever-evolving tech landscape. My approach to software development is driven by a commitment to quality, efficiency, and user-centric design.</p>
              <button className='bg-slate-400 w-56 h-10 flex items-center justify-center -mt-16 '><MdDownload />Download</button>
          </div>
        </div>

      </div>
    </>
  )
}
