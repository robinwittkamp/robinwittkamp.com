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

const Header = () => {
  return (
    <header className="firefox:bg-opacity-90 fixed top-0 w-full border-b border-neutral-200 bg-white/90 backdrop-blur-lg dark:border-neutral-800 dark:bg-neutral-900/90">
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

            {/* Open menu button container */}
            <div className="-mr-3 md:hidden">
              {/* Open menu button */}
              <Popover.Button className="inline-flex items-center justify-center rounded-md p-2">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-8 w-8" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>
        </div>

        {/* <Popover.Overlay className="fixed inset-0 bg-white/90 dark:border-neutral-800 dark:bg-neutral-900/90" /> */}

        <Transition
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {/* Mobil popover */}
          <Popover.Panel className="absolute top-0 w-full border-b border-neutral-200 bg-white backdrop-blur-lg dark:border-neutral-800 dark:bg-neutral-900">
            <div className="px-4">
              <div className="flex justify-between">
                {/* Logo container */}
                <div className="flex items-center justify-start">
                  <Logo />
                </div>

                {/* Close menu button container */}
                <div className="-mr-3 flex justify-end">
                  {/* Close menu button */}
                  <Popover.Button className="inline-flex items-center justify-center rounded-md p-2">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-8 w-8" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>

              {/* Mobil navigation */}
              <nav className="my-2">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href} passHref>
                    <Popover.Button as="a" className="block py-3">
                      <span className="text-lg">{item.name}</span>
                    </Popover.Button>
                  </Link>
                ))}
              </nav>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  );
};

export default Header;
