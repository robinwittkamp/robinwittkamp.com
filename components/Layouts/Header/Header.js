import { Popover } from '@headlessui/react';
import { AnimatePresence, LazyMotion, m } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { RemoveScroll } from 'react-remove-scroll';

import Logo from './Logo';

const loadFramerMotionFeatures = () =>
  import('../../Libraries/framerMotionFeatures').then((res) => res.default);

const navigation = [
  // { name: 'Home', href: '/home' },
  { name: 'About', href: '/about' },
  { name: 'Work', href: '/work' },
  { name: 'Contact', href: '/contact' },
];

const hamburgerLine =
  'h-[2px] w-full rounded-full bg-neutral-900 transform duration-300 group-focus:bg-neutral-500 group-hover:bg-neutral-500 dark:bg-white dark:group-focus:bg-neutral-300 dark:group-hover:bg-neutral-300';

const panelVariants = {
  open: {
    height: '100vh',
    transition: {
      ease: 'easeInOut',
      duration: 0.5,
    },
  },
  closed: {
    height: 0,
    transition: {
      ease: 'easeInOut',
      duration: 0.5,
    },
  },
};

const mobileNavVariants = {
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

const mobileNavItemVariants = {
  open: {
    opacity: 1,
    transition: {
      ease: 'anticipate',
      duration: 1,
    },
  },
  closed: {
    opacity: 0,
    transition: {
      ease: 'anticipate',
      duration: 0.5,
    },
  },
};

const desktopNavItemVariants = {
  focused: {
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 0.3,
    },
  },
  unfocused: {
    opacity: 0,
    transition: {
      ease: 'easeInOut',
      duration: 0.3,
    },
  },
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isWindowAtTop, setIsWindowAtTop] = useState(true);
  const [focused, setFocused] = useState(null);

  const handleScroll = () => {
    // console.log('scroll event', window.scrollY);
    if (window.scrollY <= 0) {
      setIsWindowAtTop(true);
    } else {
      setIsWindowAtTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <LazyMotion features={loadFramerMotionFeatures} strict>
      <Popover>
        {({ open }) => (
          <m.header
            className={`fixed top-0 z-50 flex min-h-[3rem] w-full min-w-[20rem] items-center border-b border-transparent bg-white backdrop-blur-lg transition-[border] duration-300 dark:bg-neutral-900 md:h-[4.5rem] [@supports(backdrop-filter:blur(0))]:bg-white/90 [@supports(backdrop-filter:blur(0))]:dark:bg-neutral-900/90 [@supports(backdrop-filter:saturate(0))]:backdrop-saturate-150 ${
              isOpen
                ? 'bg-white backdrop-blur-none dark:bg-neutral-900 [@supports(backdrop-filter:blur(0))]:bg-white/100 [@supports(backdrop-filter:blur(0))]:backdrop-saturate-0 [@supports(backdrop-filter:blur(0))]:dark:bg-neutral-900/100'
                : ''
            } ${isWindowAtTop ? '' : 'border-neutral-900/10 dark:border-neutral-50/10'}`}
          >
            <div className="flex-1">
              {/* x-Paddings */}
              <div className="px-4 sm:px-8">
                {/* Max width */}
                <div className="mx-auto max-w-screen-xl ">
                  {/* Logo & Navigation container */}
                  <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Logo />

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
                    <nav
                      className="-mr-6 hidden md:block"
                      onMouseLeave={() => setFocused(null)}
                      onBlur={() => setFocused(null)}
                    >
                      <ul className="flex">
                        {navigation.map((item) => (
                          <li key={item.name} className="">
                            <Link
                              className="relative flex h-[4.5rem] items-center px-6 outline-0"
                              href={item.href}
                              onFocus={() => setFocused(item)}
                              // onBlur={() => setFocused(null)}
                              onMouseEnter={() => setFocused(item)}
                              // onMouseLeave={() => setFocused(null)}
                              tabIndex={0}
                              role="link"
                            >
                              <AnimatePresence>
                                {focused === item ? (
                                  <m.div
                                    // TODO: prevent items from animating to 0 opacity when quickly switching between them
                                    className="absolute left-[10%] right-[10%] top-1/4 bottom-1/4 z-0 rounded-xl bg-neutral-100 dark:bg-neutral-700"
                                    key={item.name}
                                    initial="unfocused"
                                    animate="focused"
                                    exit="unfocused"
                                    variants={desktopNavItemVariants}
                                    transition={{
                                      layout: {
                                        duration: 0.3,
                                        ease: 'easeInOut',
                                      },
                                    }}
                                    layoutId="highlight"
                                  />
                                ) : null}
                              </AnimatePresence>
                              <span className="z-10 text-lg">{item.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>

              {/* Mobil navigation */}
              <AnimatePresence onExitComplete={() => setIsOpen(false)}>
                {open && (
                  <Popover.Panel
                    static
                    className="h-screen md:hidden"
                    as={m.div}
                    key="panel"
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={panelVariants}
                    onAnimationStart={() => setIsOpen(true)}
                  >
                    <RemoveScroll>
                      <m.nav
                        key="nav"
                        variants={mobileNavVariants}
                        className="border-t border-neutral-200 dark:border-neutral-800"
                      >
                        {navigation.map((item) => (
                          <m.div key={item.name} variants={mobileNavItemVariants}>
                            <Popover.Button
                              as={Link}
                              href={item.href}
                              className="block border-b border-neutral-200 px-4 py-3 dark:border-neutral-800 sm:px-8"
                            >
                              <span className="text-lg">{item.name}</span>
                            </Popover.Button>
                          </m.div>
                        ))}
                      </m.nav>
                    </RemoveScroll>
                  </Popover.Panel>
                )}
              </AnimatePresence>
            </div>
          </m.header>
        )}
      </Popover>
    </LazyMotion>
  );
};

export default Header;
