import Link from 'next/link';
import { Menu, Popover } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Nav from './Nav';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#work' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => (
  <header className="firefox:bg-opacity-90 fixed top-0 w-full border-b border-neutral-800 bg-white/30 backdrop-blur dark:bg-neutral-900/70">
    {/* Popover */}
    <Popover className="md:h-20 lg:h-24 xl:h-24">
      {/* Padding container */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32">
        {/* Logo & Navigation container */}
        <div className="flex items-center justify-between">
          {/* Logo container */}
          <div className="flex justify-start lg:w-0 lg:flex-1">
            {/* Logo */}
            <Link href="/">
              <a
                href="#"
                className="text-xl font-black leading-[0.85] md:text-2xl md:leading-[0.85]"
              >
                <span className="sr-only">Robin Wittkamp</span>
                <span className="">
                  robin
                  <br />
                  wittkamp
                </span>
              </a>
            </Link>
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

      {/* Mobil navigation */}
      <Popover.Panel className="">
        <nav className="">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href}>
              <a className="block p-3">
                <span className="text-lg font-extrabold ">{item.name}</span>
              </a>
            </Link>
          ))}
        </nav>
      </Popover.Panel>
    </Popover>
  </header>
);

export default Header;
