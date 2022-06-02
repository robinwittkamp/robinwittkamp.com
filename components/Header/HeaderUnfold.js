// import { useState } from 'react';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { RemoveScroll } from 'react-remove-scroll';
import Logo from './Logo';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#work' },
  { name: 'Contact', href: '#contact' },
];

const hamburgerLine =
  'h-[2px] w-full rounded-full bg-neutral-900 transform duration-300 group-focus:bg-neutral-500 group-hover:bg-neutral-500 dark:bg-white dark:group-focus:bg-neutral-300 dark:group-hover:bg-neutral-300';

const panelAnimations = {
  open: {
    height: '100vh',
    // opacity: 1,
    transition: {
      ease: 'anticipate',
      duration: 1,
    },
  },
  closed: {
    height: 0,
    // opacity: 0,
    transition: {
      ease: 'anticipate',
      duration: 1,
    },
  },
};

const navAnimations = {
  open: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemsAnimations = {
  open: {
    // y: 0,
    opacity: 1,
    transition: {
      ease: 'anticipate',
      duration: 1,
    },
  },
  closed: {
    // y: '-1rem',
    opacity: 0,
    transition: {
      ease: 'anticipate',
      duration: 1,
    },
  },
};

const HeaderUnfold = () => {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="firefox:bg-opacity-90 fixed top-0 flex min-h-[3rem] w-full items-center border-b border-neutral-200 bg-white/90 backdrop-blur-lg transition-all duration-500 dark:border-neutral-800 dark:bg-neutral-900/90 md:h-[4.5rem]">
      <div className="flex-1">
        {/* Popover */}
        <Popover>
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

              {/* Mobil navigation */}
              <AnimatePresence>
                {open && (
                  <Popover.Panel
                    static
                    className="h-screen md:hidden"
                    as={motion.div}
                    key="panel"
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={panelAnimations}
                    // initial={{
                    //   height: 0,
                    //   // opacity: 0,
                    // }}
                    // animate={{
                    //   height: '100vh',
                    //   // opacity: 1,
                    //   transition: {
                    //     ease: 'anticipate',
                    //     duration: 1,
                    //   },
                    // }}
                    // exit={{
                    //   height: 0,
                    //   // opacity: 0,
                    //   transition: {
                    //     ease: 'anticipate',
                    //     duration: 1,
                    //   },
                    // }}
                  >
                    <RemoveScroll>
                      <motion.nav
                        key="nav"
                        variants={navAnimations}
                        // animate={open ? 'open' : 'closed'}
                        // initial="closed"
                        // animate={{
                        //   transition: {
                        //     staggerChildren: 0.2,
                        //     delayChildren: 0.2,
                        //   },
                        // }}
                        // exit={{
                        //   transition: {
                        //     staggerChildren: 0.2,
                        //     staggerDirection: -1,
                        //   },
                        // }}
                      >
                        {navigation.map((item) => (
                          // TODO: use next/link
                          // <Link key={item.name} href={item.href} passHref>
                          //   <Popover.Button as="a" className="block px-4 py-3 sm:px-8">
                          //     <span className="text-lg">{item.name}</span>
                          //   </Popover.Button>
                          // </Link>
                          <motion.div
                            key={item.name}
                            variants={itemsAnimations}
                            // initial={{ opacity: 0 }}
                            // animate={{
                            //   opacity: 1,
                            //   transition: {
                            //     ease: 'anticipate',
                            //     duration: 1,
                            //   },
                            // }}
                            // exit={{
                            //   opacity: 0,
                            //   transition: {
                            //     ease: 'anticipate',
                            //     duration: 1,
                            //   },
                            // }}
                          >
                            <Popover.Button
                              // key={item.name}
                              as="a"
                              href={item.href}
                              className="block px-4 py-3 sm:px-8"
                            >
                              <span className="text-lg">{item.name}</span>
                            </Popover.Button>
                          </motion.div>
                        ))}
                      </motion.nav>
                    </RemoveScroll>
                  </Popover.Panel>
                )}
              </AnimatePresence>
            </>
          )}
        </Popover>
      </div>
    </header>
  );
};

export default HeaderUnfold;
