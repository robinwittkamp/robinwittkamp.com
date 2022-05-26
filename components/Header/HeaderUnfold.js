import React from 'react';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import Logo from './Logo';

const hamburgerLine =
  'h-[2px] w-full rounded-full bg-neutral-900 transform duration-300 group-focus:bg-neutral-500 group-hover:bg-neutral-500 dark:bg-white dark:group-focus:bg-neutral-300 dark:group-hover:bg-neutral-300';

const navigation = [
  // { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#work' },
  { name: 'Contact', href: '#contact' },
];

const HeaderUnfold = () => {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="firefox:bg-opacity-90 fixed top-0 flex min-h-[3rem] w-full items-center border-b border-neutral-200 bg-white/90 backdrop-blur-lg transition-all duration-500 dark:border-neutral-800 dark:bg-neutral-900/90 md:h-[4.5rem]">
      <div className="flex-1">
        {/* Popover */}
        <Popover className="">
          {({ open }) => (
            <>
              {/* x-Paddings */}
              <div className="px-4 sm:px-8">
                {/* Max width */}
                <div className="mx-auto max-w-screen-xl ">
                  {/* Logo & Navigation container */}
                  <div className="flex items-center justify-between">
                    {/* Logo container */}
                    <div className="flex justify-start">
                      <Logo />
                    </div>

                    {/* Mobil menu button */}
                    <div className="-mr-3 md:hidden">
                      <Popover.Button className="group inline-flex items-center justify-center rounded-md px-3 py-2 focus:outline-none">
                        <span className="sr-only">Open menu</span>
                        {/* Animated hamburger icon */}
                        <div
                          className="flex h-8 w-6 flex-col items-center justify-center"
                          aria-hidden="true"
                        >
                          <div
                            className={`${hamburgerLine} ${
                              open ? 'translate-y-[0.5rem] rotate-45' : ''
                            }`}
                          />
                          <div className={`${hamburgerLine} mt-1.5 ${open ? 'opacity-0' : ''}`} />
                          <div
                            className={`${hamburgerLine} mt-1.5 ${
                              open ? '-translate-y-[0.5rem] -rotate-45' : ''
                            }`}
                          />
                        </div>
                      </Popover.Button>
                    </div>

                    {/* Desktop navigation */}
                    <nav className="-mr-6 hidden md:block">
                      <ul className="flex">
                        {navigation.map((item) => (
                          <li key={item.name} className="">
                            <Link href={item.href}>
                              <a className="flex h-[4.5rem] items-center px-6 transition hover:text-neutral-500 dark:hover:text-neutral-300">
                                <span className="text-lg">{item.name}</span>
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>

              {/* <Popover.Overlay className="fixed inset-0 bg-white/90 dark:border-neutral-800 dark:bg-neutral-900/90" /> */}

              <Transition
                show={open}
                enter="transition duration-500"
                enterFrom="scale-95 opacity-0"
                enterTo="scale-100 opacity-100"
                leave="transition duration-500 ease-in"
                leaveFrom="scale-100 opacity-100"
                leaveTo="scale-95 opacity-0"
              >
                {/* <Popover.Overlay className="fixed inset-0 h-screen bg-white/90 dark:border-neutral-800 dark:bg-neutral-900/90" /> */}
                {/* Mobil navigation */}
                <Popover.Panel static className="h-screen md:hidden">
                  <nav className="my-2">
                    {navigation.map((item) => (
                      // TODO: use next/link
                      // <Link key={item.name} href={item.href} passHref>
                      //   <Popover.Button as="a" className="block px-4 py-3 sm:px-8">
                      //     <span className="text-lg">{item.name}</span>
                      //   </Popover.Button>
                      // </Link>
                      <Popover.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block px-4 py-3 sm:px-8"
                      >
                        <span className="text-lg">{item.name}</span>
                      </Popover.Button>
                    ))}
                  </nav>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </header>
  );
};

export default HeaderUnfold;
