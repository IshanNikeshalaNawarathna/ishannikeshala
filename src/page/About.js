import React, { useState, Fragment } from 'react'
import img from '../assets/img/ISHAN.jpg';
import { MdDownload } from "react-icons/md";
import { render } from "react-dom";
import { Timeline, Event } from "react-timeline-scribble";
import { CountUp } from 'use-count-up'
import { RiCupLine } from "react-icons/ri";
import { SlTrophy } from "react-icons/sl";
import { GoRocket } from "react-icons/go";
import { IoMdAdd } from "react-icons/io";
import { AiOutlinePercentage } from "react-icons/ai";
import { GoDotFill } from "react-icons/go";


export const About = () => {


  return (
    <>
      <div className='relative isolate px-8 '>

        <div className='mx-auto lg:max-w-5xl  lg:py-0 py-10 sm:py-20 lg:pt-10'>
          <div className='pb-8 lg:pb-8'>
            <span className='font-bold text-4xl'>ABOUT ME</span>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-4">
            <div class="lg:row-span-3 row-span-1 justify-center items-center flex  lg:w-auto lg:h-auto h-80  rounded-2xl">
              <img className=" lg:w-auto lg:h-auto lg:p-5 h-72  rounded-2xl" src={img} alt="" />
            </div>
            <div className='grid grid-cols-1  md:grid-cols-1 lg:grid-cols-1 gap-4 lg:gap-4'>
              <p className='text-xl font-normal'>Hello, I'm Ishan Nikeshala Nawarathna, a passionate and skilled Software Engineer with extensive experience in Java and PHP. I specialize in developing robust and efficient back-end solutions while also excelling in front-end development with React and React Native. My proficiency in modern CSS frameworks like Bootstrap and Tailwind CSS allows me to create responsive and visually appealing user interfaces.</p>
              <p className='text-xl font-normal'>Throughout my career, I have consistently demonstrated my ability to adapt to new technologies and frameworks, ensuring that I stay at the forefront of the ever-evolving tech landscape. My approach to software development is driven by a commitment to quality, efficiency, and user-centric design.</p>
            </div>
            <div className=''>
              <button type="button" className="text-white flex justify-between items-center bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-300 font-medium  rounded-full text-lg px-10 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"><MdDownload />Download CV</button>
            </div>
          </div>
          <div className='lg:mt-10 mt-10'>
            <Fragment>
              <Timeline className='bg-black'>
                <Event interval={"2022 - Present"} title={"Education"} subtitle={"BEng In Software Engineering | IIC university of technology Cambodia  University"}>
                  <p className='text-xl'> As a undergraduate of the Bachelor of Engineering in Software Engineering program, I possess a deep understanding of software design, development, and maintenance. With I strong foundation in computer science, programming languages, and software development methodologies, I am well-equipped to meet industry standards and customer requirements in designing and developing software applications. I am prepared to contribute to the advancement of the field through I have knowledge and expertise in software engineering principles.</p>
                </Event>
                <Event interval={"2015 – 2016"} title={"Skills"}>
                  <ul className='mt-1'>
                    <li className='text-xl flex items-center gap-1'>
                    <GoDotFill />
                      Programming Languages: Java, PHP
                    </li>
                  </ul>
                  <ul className='mt-1'>
                    <li className='text-xl flex items-center gap-1'>
                    <GoDotFill />
                    Front-end Technologies: React, React Native
                    </li>
                  </ul>
                  <ul className='mt-1'>
                    <li className='text-xl flex items-center gap-1'>
                    <GoDotFill />
                    CSS Frameworks: Bootstrap, Tailwind CSS
                    </li>
                  </ul>
                  <ul className='mt-1'>
                    <li className='text-xl flex items-center gap-1'>
                    <GoDotFill />
                    Web Technologies: HTML, CSS, JavaScript
                    </li>
                  </ul>
                  <ul className='mt-1'>
                    <li className='text-xl flex items-center gap-1'>
                    <GoDotFill />
                    Databases: MySQL, PostgreSQL
                    </li>
                  </ul>
                  <ul className='mt-1'>
                    <li className='text-xl flex items-center gap-1'>
                    <GoDotFill />
                    Communication: Strong verbal and written communication skills, Team collaboration
                    </li>
                  </ul>
                  <ul className='mt-1'>
                    <li className='text-xl flex items-center gap-1'>
                    <GoDotFill />
                    Development Practices: Version Control (Git)
                    </li>
                  </ul>
                </Event>
                <Event interval={"2015 – 2016"} title={"Experience"} subtitle={"Project Experiences"}>
                  <li>
                    Programming Languages: Java, PHP
                  </li>
                  Front-end Technologies: React, React Native
                  CSS Frameworks: Bootstrap, Tailwind CSS
                  Web Technologies: HTML, CSS, JavaScript
                  Databases: MySQL, PostgreSQL
                  Communication: Strong verbal and written communication skills, Team collaboration
                  Development Practices: Version Control (Git)
                </Event>
              </Timeline>
            </Fragment>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 lg:gap-4 mt-10">
              <div class="lg:row-span-3 row-span-1 justify-center items-center flex shadow-md rounded-2xl p-1">
                <div className="lg:text-[24px] text-[17px] lg:flex items-center font-bold">
                  <div className='lg:pt-8 lg:p-3 pt-5'>
                    <RiCupLine className='lg:text-[84px] text-[50px]' />
                  </div>
                  <div>
                    <h5 className='lg:text-[24px] text-[16px] font-semibold text-gray-600'>GitHub Repositories</h5>
                    <div className='flex items-center lg:pb-0 pb-2'>
                      <CountUp isCounting end={50} duration={3.2} />
                      <IoMdAdd size={30} />
                    </div>
                  </div>
                </div>
              </div>
              <div class="lg:row-span-3 row-span-1 justify-center items-center flex shadow-md  rounded-2xl p-1">
                <div className="lg:text-[24px] text-[17px] lg:flex items-center font-bold ">
                  <div className='lg:pt-8 lg:p-3 pt-5'>
                    <GoRocket className='lg:text-[84px] text-[50px]' />
                  </div>
                  <div>
                    <h5 className='lg:text-[24px] text-[16px] font-semibold text-gray-600'>Compite Project</h5>
                    <div className='flex items-center lg:pb-0 pb-2'>
                      <CountUp isCounting end={5} duration={3.2} />
                    </div>
                  </div>
                </div>
              </div>
              <div class="lg:row-span-3 row-span-1 justify-center items-center flex shadow-md rounded-2xl p-1">
                <div className="lg:text-[24px] text-[17px] lg:flex items-center font-bold ">
                  <div className='lg:pt-8 lg:p-3 pt-5'>
                    <SlTrophy className='lg:text-[84px] text-[50px]' />
                  </div>
                  <div>
                    <h5 className='lg:text-[24px] text-[16px] font-semibold text-gray-600'>Clean Code</h5>
                    <div className='flex items-center lg:pb-0 pb-2'>
                      <CountUp isCounting end={50} duration={3.2} />
                      <AiOutlinePercentage size={30} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  );
}
