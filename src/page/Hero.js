import React from 'react'
import img from '../assets/img/ISHAN.jpg';
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { TypeAnimation } from 'react-type-animation';
import { FaMedium } from "react-icons/fa6";
import Button from '../components/Button';
import GitHub from '../components/GitHub';

export const Hero = () => {
  return (
    <>
      <div className='relative isolate px-6  lg:mt-0 mt-7 '>

        <div className='mx-auto max-w-5xl py-20 sm:py-32 lg:pt-32 '>
          <div className='text-center'>
            <div className='flex justify-center items-center'>
              <img src={img} className='lg:h-72 lg:w-72 h-72 w-72 rounded-full' />
            </div>
            <div className='lg:mt-8 mt-6'>
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
              <Button />
            </div>
          </div>
          <div className='hidden  lg:flex'>
            <GitHub />
          </div>
        </div>

      </div>
    </>
  )
}
