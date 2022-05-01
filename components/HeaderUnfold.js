import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Logo from './Header/Logo';
// import Nav from './Nav';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#work' },
  { name: 'Contact', href: '#contact' },
];

const HeaderUnfold = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="firefox:bg-opacity-90 fixed top-0 w-full border-b border-neutral-200 bg-white/90 backdrop-blur-lg transition-[height] duration-500 dark:border-neutral-800 dark:bg-neutral-900/90">
      {/* Popover */}
      <Popover className="md:h-20 lg:h-24 xl:h-24">
        {/* Padding container */}
        <div className="px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32">
          {/* Logo & Navigation container */}
          <div className="flex items-center justify-between">
            {/* Logo container */}
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Logo />
            </div>

            {/* Mobil menu button */}
            <div className="-mr-3 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md p-2">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-8 w-8" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>
        </div>

        {/* <Popover.Overlay className="fixed inset-0 bg-white/90 dark:border-neutral-800 dark:bg-neutral-900/90" /> */}

        <Transition
          enter="transition duration-500"
          enterFrom="scale-95 opacity-0"
          enterTo="scale-100 opacity-100"
          leave="transition duration-500 ease-in"
          leaveFrom="scale-100 opacity-100"
          leaveTo="scale-95 opacity-0"
        >
          {/* Mobil navigation */}
          <Popover.Panel className="">
            <nav className="my-2">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href} passHref>
                  <Popover.Button as="a" className="block px-4 py-3">
                    <span className="text-lg">{item.name}</span>
                  </Popover.Button>
                </Link>
              ))}
            </nav>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  );
};

export default HeaderUnfold;
