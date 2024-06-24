import React from 'react'
import img from '../assets/img/ISHAN.jpg';
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { MdDownload } from "react-icons/md";

export const Hero = () => {
  return (
    <>
      <div className='relative isolate px-8  '>

        <div className='mx-auto max-w-6xl py-20 sm:py-40 lg:pt-40'>
          <div className='text-center'>
            <div className='flex justify-center items-center'>
              <img src={img} className='h-80 w-80 rounded-full' />
            </div>
            <p>Ishan Nikeshala Nawarathna</p>
            <p>I'm Software Engineer</p>
            <div className='flex justify-center items-center'>
              <IoLogoGithub />
              <FaLinkedin />
            </div>
            <div className='flex justify-center items-center '>
              <button className='flex justify-between items-center '><MdDownload/>Download CV</button>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
