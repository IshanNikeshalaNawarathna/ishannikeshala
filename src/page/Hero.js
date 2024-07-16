import React from 'react'
import img from '../assets/img/ISHAN.jpg';
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { TypeAnimation } from 'react-type-animation';
import { FaMedium } from "react-icons/fa6";

export const Hero = () => {
  return (
    <>
      <div className='relative isolate px-8 '>

        <div className='mx-auto max-w-5xl py-20 sm:py-40 lg:pt-32'>
          <div className='text-center'>
            <div className='flex justify-center items-center'>
              <img src={img} className='lg:h-80 lg:w-80 h-72 w-72 rounded-full' />
            </div>
            <div className='lg:mt-8 mt-4'>
              <p className='lg:text-5xl text-2xl font-bold'>Ishan Nikeshala Nawarathna</p>
            </div>
            <div className='lg:mt-8 mt-4'>
              <TypeAnimation
                sequence={[
                  "I'm Software Engineer", 1000,
                  "I'm Backend Engineer", 1000,
                ]}
                wrapper='span'
                speed={20}
                className='text-2xl lg:text-4xl font-bold'
                repeat={Infinity}
              />
            </div>

            <div className='flex justify-center items-center lg:mt-8 mt-4 gap-2'>
              <IoLogoGithub size={30} />
              <FaLinkedin size={30} />
              <FaMedium size={30} />
            </div>
            <div className='flex justify-center items-center lg:mt-8 mt-4 '>
              <button type="button" className="text-white flex justify-between items-center bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium  rounded-full text-lg px-10 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"><MdDownload />Download CV</button>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
