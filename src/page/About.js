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


            <ol class="relative border-s border-gray-200 dark:border-gray-700">
              <li class="mb-10 ms-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-3xl font-semibold leading-none text-gray-400 dark:text-gray-500">2022-Present</time>
                <h3 class="text-2xl font-semibold  dark:text-gray-900 text-white">Education</h3>
                <h3 class="text-2xl font-semibold  dark:text-gray-900 text-white">BEng In Software Engineering | IIC university of technology Cambodia  University</h3>
                <p class="mb-4 text-xl font-normal text-gray-500 dark:text-gray-400">As a undergraduate of the Bachelor of Engineering in Software Engineering program, I possess a deep understanding of software design, development, and maintenance. With I strong foundation in computer science, programming languages, and software development methodologies, I am well-equipped to meet industry standards and customer requirements in designing and developing software applications. I am prepared to contribute to the advancement of the field through I have knowledge and expertise in software engineering principles.</p>

              </li>
              <li class="mb-10 ms-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-3xl font-normal leading-none text-gray-400 dark:text-gray-500">2022-Present</time>
                <h3 class="text-2xl font-semibold dark:text-gray-900 text-white">Skills</h3>
                <div className='px-5 mt-3'>
                  <ol class="relative border-s border-gray-200 dark:border-gray-700 mt-3">
                    <li class="mb-2 ms-4">
                      <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                      <time class="mb-1 text-xl font-normal leading-none text-gray-400 dark:text-gray-500">Programming Languages: Java, PHP</time>
                    </li>
                    <li class="mb-2 ms-4">
                      <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                      <time class="mb-1 text-xl font-normal leading-none text-gray-400 dark:text-gray-500">Front-end Technologies: React, React Native</time>
                    </li>
                    <li class="mb-2 ms-4">
                      <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                      <time class="mb-1 text-xl font-normal leading-none text-gray-400 dark:text-gray-500">CSS Frameworks: Bootstrap, Tailwind CSS</time>
                    </li>
                    <li class="mb-2 ms-4">
                      <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                      <time class="mb-1 text-xl font-normal leading-none text-gray-400 dark:text-gray-500">Databases: MySQL, Firebase</time>
                    </li>
                    <li class="mb-2 ms-4">
                      <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                      <time class="mb-1 text-xl font-normal leading-none text-gray-400 dark:text-gray-500">communication skills, Team collaboration</time>
                    </li>
                    <li class="mb-2 ms-4">
                      <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                      <time class="mb-1 text-xl font-normal leading-none text-gray-400 dark:text-gray-500">Development Practices: Version Control (Git)</time>
                    </li>
                  </ol>
                </div>
              </li>
              <li className="ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-3xl font-semibold leading-none text-gray-400 dark:text-gray-500">2022-Present</time>
                <h3 className="text-2xl font-semibold  dark:text-gray-900 text-white">Experience</h3>
                <div className='px-5 mt-3'>
                  <ol className="relative border-s border-gray-200 dark:border-gray-700">
                    <li class="mb-5 ms-4">
                      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                      <time className="mb-1 text-xl font-normal leading-none text-gray-400 dark:text-gray-500">2023-Present</time>
                      <h3 class="text-xl font-semibold  dark:text-gray-900 text-white">Technology Blogger</h3>
                      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Medium</p>

                    </li>
                    <li className="mb-5 ms-4">
                      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                      <time className="mb-1 text-xl font-normal leading-none text-gray-400 dark:text-gray-500">Project Experience</time>
                      <h3 className="text-xl font-semibold  dark:text-gray-900 text-white">Marketing UI design in Figma</h3>
                      <p className="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                    </li>
                    <li className="mb-5 ms-4">
                      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                      <time className="mb-1 text-xl font-normal leading-none text-gray-400 dark:text-gray-500">Volunteer Experience</time>
                      <h3 className="text-xl font-semibold  dark:text-gray-900 text-white">Marketing UI design in Figma</h3>
                      <p className="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                    </li>
                  </ol>
                </div>
              </li>
            </ol>



            {/* <Fragment>
              <Timeline className='bg-black'>
                <Event interval={"2022 - Present"} title={"Education"} subtitle={"BEng In Software Engineering | IIC university of technology Cambodia  University"}>
                  <p className='text-xl'> As a undergraduate of the Bachelor of Engineering in Software Engineering program, I possess a deep understanding of software design, development, and maintenance. With I strong foundation in computer science, programming languages, and software development methodologies, I am well-equipped to meet industry standards and customer requirements in designing and developing software applications. I am prepared to contribute to the advancement of the field through I have knowledge and expertise in software engineering principles.</p>
                </Event>
                <Event interval={"2015 – 2016"} title={"Skills"}>
                  <p className='text-xl mt-4'>Programming Languages: Java, PHP</p>
                  <p className='text-xl'>Front-end Technologies: React, React Native</p>
                  <p className='text-xl'>CSS Frameworks: Bootstrap, Tailwind CSS</p>
                  <p className='text-xl'>Web Technologies: HTML, CSS, JavaScript</p>
                  <p className='text-xl'>Databases: MySQL, PostgreSQL</p>
                  <p className='text-xl'>Communication: communication skills, Team collaboration</p>
                  <p className='text-xl'>Development Practices: Version Control (Git)</p>
                </Event>
                <Event interval={"2022 Present"} title={"Experience"} >

                  <ol class="relative border-s border-gray-200 dark:border-gray-700">
                    <li class="mb-10 ms-4">
                      <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                      <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
                      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Application UI code in Tailwind CSS</h3>
                      <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
                      <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                      </svg></a>
                    </li>
                    <li class="mb-10 ms-4">
                      <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                      <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2022</time>
                      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Marketing UI design in Figma</h3>
                      <p class="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                    </li>
                    <li class="ms-4">
                      <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                      <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
                      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">E-Commerce UI code in Tailwind CSS</h3>
                      <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                    </li>
                  </ol>


                </Event>
              </Timeline>
            </Fragment> */}
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
