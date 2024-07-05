import React, { useState } from 'react'
import img from '../assets/img/ISHAN.jpg';
import { MdDownload } from "react-icons/md";

const ed = [
  {
    question:"ddjsdksdaslsdsadsojdksdasdasd",
    anser:"djddhdnifhdnvdvbvdfdkjfdiflkjsdfsm"
  },
  {
    question:"ddjsdksdaslsdsadsojdksdasdasd",
    anser:"djddhdnifhdnvdvbvdfdkjfdiflkjsdfsm"
  }
]

export const About = () => {

  const [id,setId] = useState();
  const[visibility,setVisibility] = useState(false);

  return (
    <>
      <div className='relative isolate px-8 '>

        <div className='mx-auto lg:max-w-5xl  lg:py-0 py-10 sm:py-20 lg:pt-10 '>
          <div className='pb-8 lg:pb-8'>
            <span className='font-bold text-4xl'>About Me</span>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-4">
            <div class="lg:row-span-3 row-span-1 justify-center flex">
              <img className=" lg:w-auto lg:h-auto h-80 rounded-2xl" src={img} alt="" />
            </div>
            <div className='grid grid-cols-1  md:grid-cols-1 lg:grid-cols-1 gap-4 lg:gap-4'>
              <p className='text-xl font-normal'>Hello, I'm Ishan Nikeshala Nawarathna, a passionate and skilled Software Engineer with extensive experience in Java and PHP. I specialize in developing robust and efficient back-end solutions while also excelling in front-end development with React and React Native. My proficiency in modern CSS frameworks like Bootstrap and Tailwind CSS allows me to create responsive and visually appealing user interfaces.</p>
              <p className='text-xl font-normal'>Throughout my career, I have consistently demonstrated my ability to adapt to new technologies and frameworks, ensuring that I stay at the forefront of the ever-evolving tech landscape. My approach to software development is driven by a commitment to quality, efficiency, and user-centric design.</p>
            </div>
            <div  className=''>
              <button className='bg-slate-400 w-56 h-10 flex items-center justify-center'><MdDownload />Download</button>
            </div>
          </div>
          
        </div>

      </div>
    </>
  )
}
