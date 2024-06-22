import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { RiHomeLine} from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import { LuLayers } from "react-icons/lu";
import { LuClipboardEdit } from "react-icons/lu";
import { BiMessageRounded } from "react-icons/bi";
import { MdDarkMode } from "react-icons/md";

const navigation = [
  { href: '#',icon:<RiHomeLine />, },
  { href: '#',icon:<FiUser /> },
  { href: '#',icon:<LuLayers /> },
  { href: '#', icon:<LuClipboardEdit /> },
  { href: '#', icon:<BiMessageRounded /> },
  { href: '#', icon:<MdDarkMode /> },
]
const nameNav = [
  { href: '#',name:'Home' },
  { href: '#',name:'About'},
  { href: '#',name:'Project'},
  { href: '#', name:'Blog' },
  { href: '#', name:'Contact' },
  { href: '#', icon:<MdDarkMode /> },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
   
      <header className="absolute inset-x-0 top-0 z-50 mt-10 ">
        <nav className="flex items-center justify-between p-6 lg:px-8 lg:justify-center lg:flex" aria-label="Global">
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden  lg:flex lg:gap-x-12 border pt-5 pr-7 pl-7 pb-5 fixed rounded-full">
        <a className='font-bold'>ISHAN</a>
            {navigation.map((item) => (
              <a key={item.icon} href={item.href} className="text-2xl font-semibold leading-6 text-gray-900">
               {item.icon}
              </a>
            ))}
          </div>
        </nav>
        <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {nameNav.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    
  )
}
