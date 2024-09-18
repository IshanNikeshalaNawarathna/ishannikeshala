import React, { useState, Fragment } from 'react'
import img from '../assets/img/ISHAN.jpg';
import GitHub from '../components/GitHub';
import Button from '../components/Button';
import Eduction from '../components/Education'
import Skills from '../components/Skills';
import Experience from '../components/Experience';

export const About = () => {


  return (
    <>
      <div className='relative isolate px-8 '>

        <div className='mx-auto lg:max-w-5xl py-10 sm:py-10 lg:pt-24 '>
          <div className='pb-8 lg:pb-8'>
            <span className='font-bold text-4xl'>ABOUT ME</span>
          </div>
          <div className='mt-4'>
            <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-4">
              <div class="lg:row-span-3 row-span-1 justify-center items-center flex  lg:w-auto lg:h-auto h-80  rounded-2xl">
                <img className=" lg:w-auto lg:h-auto lg:p-5 h-72  rounded-2xl" src={img} alt="" />
              </div>
              <div className='grid grid-cols-1  md:grid-cols-1 lg:grid-cols-1 gap-4 lg:gap-4'>
                <p className='text-xl font-normal'>Hello, I'm Ishan Nikeshala Nawarathna, a passionate and skilled Software Engineer with extensive experience in Java and PHP. I specialize in developing robust and efficient back-end solutions while also excelling in front-end development with React and React Native. My proficiency in modern CSS frameworks like Bootstrap and Tailwind CSS allows me to create responsive and visually appealing user interfaces.</p>
                <p className='text-xl font-normal'>Throughout my career, I have consistently demonstrated my ability to adapt to new technologies and frameworks, ensuring that I stay at the forefront of the ever-evolving tech landscape. My approach to software development is driven by a commitment to quality, efficiency, and user-centric design.</p>
              </div>
              <Button />
            </div>

            <Eduction />
            <Skills />
            <Experience />
            <div className='lg:mt-10 mt-10'>
              <div className='lg:hidden'>
                <GitHub />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
