import React from 'react'
import { MdDownload } from "react-icons/md";

function Button() {
    return (
        <div className=''>
            <button type="button" className="text-white flex justify-between items-center bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-300 font-medium  rounded-full text-lg px-10 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"><MdDownload />Download CV</button>
        </div>
    )
}

export default Button