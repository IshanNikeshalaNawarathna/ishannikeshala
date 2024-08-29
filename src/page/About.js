import React, { useState, Fragment } from 'react'
import img from '../assets/img/ISHAN.jpg';
import GitHub from '../components/GitHub';
import Button from '../components/Button';


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
            <div className='lg:mt-10 mt-10'>
              <ol class="relative border-s border-gray-200 dark:border-gray-700">
                <li class="mb-10 ms-4">
                  <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time class="mb-1 text-3xl font-semibold leading-none text-gray-400 dark:text-gray-500">2022-Present</time>
                  <h3 class="text-2xl font-semibold  dark:text-gray-900 text-white">Education</h3>
                  <h3 class="text-2xl font-semibold  dark:text-gray-900 text-white">BEng In Software Engineering | IIC university of technology Cambodia  University</h3>
                  <p class="mb-4 text-xl font-normal text-gray-500 dark:text-gray-400">As a undergraduate of the Bachelor of Engineering in Software Engineering program, I possess a deep understanding of software design, development, and maintenance. With I strong foundation in computer science, programming languages, and software development methodologies, I am well-equipped to meet industry standards and customer requirements in designing and developing software applications. I am prepared to contribute to the advancement of the field through I have knowledge and expertise in software engineering principles.</p>
                </li>
                <li class="mb-2 ms-4">
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
                  <time className="mb-1 text-3xl font-semibold leading-none text-gray-400 dark:text-gray-500">2023-Present</time>
                  <h3 className="text-2xl font-semibold  dark:text-gray-900 text-white">Experience</h3>
                  <div className='px-5 mt-3'>
                    <ol className="relative border-s border-gray-200 dark:border-gray-700">
                      <li class="mb-5 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-xl font-normal leading-none text-gray-400 dark:text-gray-500">2023-Present</time>
                        <h3 class="text-xl font-semibold  dark:text-gray-900 text-white">Technology Blogger</h3>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Medium</p>

                      </li>
                      <li className="mb-2 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-xl font-normal leading-none text-gray-400 dark:text-gray-500">Project Experience</time>
                        <h3 className="text-xl font-semibold  dark:text-gray-900 text-white">Marketing UI design in Figma</h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                      </li>
                      <li className="mb-5 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-xl font-normal leading-none text-gray-400 dark:text-gray-500">Volunteer Experience</time>
                        <div className='px-5 mt-3'>
                          <ol className="relative border-s border-gray-200 dark:border-gray-700">
                            <li class="mb-5 ms-4">
                              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                              <time className="mb-1 text-xl font-normal leading-none text-gray-400 dark:text-gray-500">2023-Present</time>
                              <h3 class="text-xl font-semibold  dark:text-gray-900 text-white">GitHub</h3>
                              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Developer program Member</p>

                            </li>
                            <li className="mb-5 ms-4">
                              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                              <time className="mb-1 text-xl font-normal leading-none text-gray-400 dark:text-gray-500">2024-Present</time>
                              <h3 className="text-xl font-semibold  dark:text-gray-900 text-white">DEV COMMUNITY</h3>
                              <p className="text-base font-normal text-gray-500 dark:text-gray-400">Member.</p>
                            </li>
                            <li className="mb-5 ms-4">
                              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                              <time className="mb-1 text-xl font-normal leading-none text-gray-400 dark:text-gray-500">2018 Present</time>
                              <h3 className="text-xl font-semibold  dark:text-gray-900 text-white">INTERNET SOCIETY</h3>
                              <p className="text-base font-normal text-gray-500 dark:text-gray-400">Member.</p>
                            </li>
                          </ol>
                        </div>
                      </li>
                    </ol>
                  </div>
                </li>
              </ol>
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
