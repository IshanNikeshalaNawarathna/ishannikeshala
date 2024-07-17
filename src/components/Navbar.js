import { useEffect, useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { RiHomeLine } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import { LuLayers } from "react-icons/lu";
import { LuClipboardEdit } from "react-icons/lu";
import { BiMessageRounded } from "react-icons/bi";
import { MdDarkMode } from "react-icons/md";
import { MdSunny } from "react-icons/md";

const navigation = [
  { href: '#', icon: <RiHomeLine />, },
  { href: '#', icon: <FiUser /> },
  { href: '#', icon: <LuLayers /> },
  { href: '#', icon: <LuClipboardEdit /> },
  { href: '#', icon: <BiMessageRounded /> },
]

const nameNav = [
  { href: '#', name: 'Home' },
  { href: '#', name: 'About' },
  { href: '#', name: 'Project' },
  { href: '#', name: 'Blog' },
  { href: '#', name: 'Contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  return (

    <header className="inset-x-0 top-0 z-50 h-20 lg:flex justify-center items-center  bg-white fixed">
      <nav className="flex items-center justify-between p-6 lg:px-8 lg:justify-center lg:flex" aria-label="Global">
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 "
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden  lg:flex lg:gap-x-12 border pt-5 pr-7 pl-7 pb-5 fixed rounded-full">
          <a className='font-bold'>ISHAN</a>
          {navigation.map((item) => (
            <a key={item.icon} href={item.href} className="text-2xl font-semibold leading-6">
              {item.icon}
            </a>
          ))}
          <button
            onClick={toggleTheme}
          >
            {theme === 'dark' ? (
              <MdSunny className="w-6 h-6 text-white" />
            ) : (
              <MdDarkMode className="w-6 h-6  text-gray-800" />
            )}
          </button>
        </div>
      </nav>
      <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        {/* <div className="fixed inset-0 z-50" /> */}
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-28 overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 bg-white h-fit">
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y">
              <div className="space-y-2 py-6 ">
                {navigation.map((item) => (
                  <a
                    key={item.icon}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-8 py-5 font-bold text-2xl  leading-7"
                  >
                    {item.icon}

                  </a>
                ))}

              </div>


            </div>
     
          </div>
          <div className='flex justify-center py-60'>
              <button
                onClick={toggleTheme}
              >
                {theme === 'dark' ? (
                  <MdSunny className="w-6 h-6 text-white" />
                ) : (
                  <MdDarkMode className="w-6 h-6  text-gray-800" />
                )}
              </button>

            </div>
        </DialogPanel>
      </Dialog>
    </header>

  )
}
