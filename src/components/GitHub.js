import React from 'react'
import { CountUp } from 'use-count-up'
import { RiCupLine } from "react-icons/ri";
import { SlTrophy } from "react-icons/sl";
import { GoRocket } from "react-icons/go";
import { IoMdAdd } from "react-icons/io";
import { AiOutlinePercentage } from "react-icons/ai";

function GitHub() {
    return (
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 lg:gap-4 lg:mt-8 mt-4">
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
                            <CountUp isCounting end={100} duration={3.2} />
                            <AiOutlinePercentage size={30} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GitHub