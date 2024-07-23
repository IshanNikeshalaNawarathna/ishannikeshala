import React, { useState, Fragment } from 'react'
import img from '../assets/img/ISHAN.jpg';
import { MdDownload } from "react-icons/md";
import { render } from "react-dom";
import { Timeline, Event } from "react-timeline-scribble";
import { CountUp } from 'use-count-up'

export const About = () => {


  return (
    <>
      <div className='relative isolate px-8 '>

        <div className='mx-auto lg:max-w-5xl  lg:py-0 py-10 sm:py-20 lg:pt-10'>
          <div className='pb-8 lg:pb-8'>
            <span className='font-bold text-4xl'>ABOUT ME</span>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-4">
            <div class="lg:row-span-3 row-span-1 justify-center flex">
              <img className=" lg:w-auto lg:h-auto h-80 rounded-2xl" src={img} alt="" />
            </div>
            <div className='grid grid-cols-1  md:grid-cols-1 lg:grid-cols-1 gap-4 lg:gap-4'>
              <p className='text-xl font-normal'>Hello, I'm Ishan Nikeshala Nawarathna, a passionate and skilled Software Engineer with extensive experience in Java and PHP. I specialize in developing robust and efficient back-end solutions while also excelling in front-end development with React and React Native. My proficiency in modern CSS frameworks like Bootstrap and Tailwind CSS allows me to create responsive and visually appealing user interfaces.</p>
              <p className='text-xl font-normal'>Throughout my career, I have consistently demonstrated my ability to adapt to new technologies and frameworks, ensuring that I stay at the forefront of the ever-evolving tech landscape. My approach to software development is driven by a commitment to quality, efficiency, and user-centric design.</p>
            </div>
            <div className=''>
              <button type="button" className="text-white flex justify-between items-center bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-300 font-medium  rounded-full text-lg px-10 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"><MdDownload />Download CV</button>
            </div>
          </div>
          <div className='lg:mt-16 mt-10'>
            <Fragment>
              <Timeline className='bg-black'>
                <Event interval={"2022 - Present"} title={"Education"} subtitle={"BEng In Software Engineering | IIC university of technology Cambodia  University"}>
                  As a undergraduate of the Bachelor of Engineering in Software Engineering program, I possess a deep understanding of software design, development, and maintenance. With I strong foundation in computer science, programming languages, and software development methodologies, I am well-equipped to meet industry standards and customer requirements in designing and developing software applications. I am prepared to contribute to the advancement of the field through I have knowledge and expertise in software engineering principles.
                </Event>
                <Event interval={"2015 – 2016"} title={"Skills"}>
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
            <CountUp isCounting end={1320} duration={3.2} />
          </div>
        </div>

      </div>
    </>
  );
}
