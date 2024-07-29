import Button from "../components/Button";
import React, { Fragment } from "react";
import { IoLogoGithub } from "react-icons/io";
import { SiMedium } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export const Contact = () => {
  return (
    <>
      <div className='relative isolate px-8 '>

        <div className='mx-auto lg:max-w-5xl py-20 sm:py-32 lg:pt-32'>
          <div className='pb-8 lg:pb-8'>
            <span className='font-bold text-4xl'>CONTACT</span>
          </div>
          <div className="mt-4">
            <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-4">
              <div class="lg:row-span-3 row-span-1 ">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <input class="w-full bg-gray-100 text-gray-900  p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text" placeholder="Your Name*" />
                  <input class="w-full bg-gray-100 text-gray-900  p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text" placeholder="Email*" />
                </div>
                <div className="gap-2">
                  <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="email" placeholder="Subject*" />
                </div>
                <div className="gap-2">
                  <textarea placeholder="Message*" class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                </div>
                <div className="mt-4 ">
                  <Button />
                </div>
              </div>
              <div className='grid grid-cols-1  md:grid-cols-1 lg:grid-cols-1 gap-4 lg:gap-4'>
                <div className="py-6 md:py-0 md:px-6">
                  <h1 className="text-4xl font-bold">Get in touch</h1>
                  <p className="pt-2 pb-4 text-xl font-semibold">Fill in the form to start a conversation</p>
                  <div className="space-y-4">
                    <p className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-xl">157, Diddeniya North, Hanwella</span>
                    </p>
                    <p className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                      </svg>
                      <span className="text-xl">+94 767 235 819</span>
                    </p>
                    <p className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                      </svg>
                      <span className="text-xl">ishannikeshala1999@gmail.com</span>
                    </p>
                  </div>
                  <div>
                    <div class="sm:flex sm:items-center sm:justify-between mt-5">
                      <div class="flex mt-4 sm:justify-center sm:mt-0">
                        <a href="#" class="text-gray-500 hover:text-gray-900">
                          <IoLogoGithub size={30} />
                        </a>
                        <a href="#" class="text-gray-500 hover:text-gray-900 ms-5">
                          <SiMedium size={30} />
                        </a>
                        <a href="#" class="text-gray-500 hover:text-gray-900 ms-5">
                          <FaLinkedin size={30} />
                        </a>
                        <a href="#" class="text-gray-500 hover:text-gray-900 ms-5">
                          <FaInstagram size={30} />
                        </a>
                        <a href="#" class="text-gray-500 hover:text-gray-900 ms-5">
                          <FaTwitter size={30} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}
