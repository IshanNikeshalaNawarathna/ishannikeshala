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
      <div className='relative isolate px-8  '>

        <div className='mx-auto max-w-6xl py-20 sm:py-40 lg:pt-40'>
          <div className='text-center'>
            <div className='flex justify-center items-center'>
              <img src={img} className='lg:h-80 lg:w-80 h-52 w-52 rounded-full' />
            </div>
            <p>Ishan Nikeshala Nawarathna</p>
            <TypeAnimation
              sequence={[
                "I'm Software Engineer", 1000,
                "I'm Backend Engineer", 1000,
              ]}
              wrapper='span'
              speed={20}
              className='text-2xl font-bold'
              repeat={Infinity}
            />
       
            <div className='flex justify-center items-center'>
              <IoLogoGithub />
              <FaLinkedin />
              <FaMedium />
            </div>
            <div className='flex justify-center items-center '>
              <button className='flex justify-between items-center '><MdDownload />Download CV</button>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
