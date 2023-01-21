import { Popover } from '@headlessui/react';
import { AnimatePresence, LazyMotion, m } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import type { ReactElement } from 'react';
import { useEffect, useState } from 'react';
import { RemoveScroll } from 'react-remove-scroll';

import headerDe from '../public/locales/de/header.json';
import headerEn from '../public/locales/en/header.json';
import Logo from './Logo';

const loadFramerMotionFeatures = () =>
  import('./Libraries/framerMotionFeatures').then((res) => res.default);

type MainNavItemProps = {
  id: string;
  name: string;
  href: string;
};

const hamburgerLine =
  'h-[2px] w-full rounded-full bg-white transform duration-300 group-focus:bg-rusty-300 group-hover:bg-rusty-300';

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
      // delayChildren: 0.5,
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
      ease: 'easeIn',
      duration: 0.3,
    },
  },
  closed: {
    opacity: 0,
    transition: {
      ease: 'easeOut',
      duration: 0.2,
    },
  },
};

const desktopNavItemVariants = {
  focused: {
    // opacity: 1,
    // transition: {
    //   ease: 'easeInOut',
    //   duration: 0.3,
    // },
  },
  unfocused: {
    // opacity: 0,
    // transition: {
    //   ease: 'easeInOut',
    //   duration: 0.3,
    // },
  },
};

const Header = (): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [focused, setFocused] = useState<MainNavItemProps>();

  const router = useRouter();
  const { locale } = router;
  const header = locale === 'en' ? headerEn : headerDe;
  const navigation = header.mainNav.items;

  const handleScroll = () => {
    // console.log('scroll event', window.scrollY);
    if (window.scrollY <= 0) {
      setIsScrolled(false);
    } else {
      setIsScrolled(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const { t, ready } = useTranslation('header');
  if (!ready) return <span>Loading translations...</span>;

  return (
    <LazyMotion features={loadFramerMotionFeatures} strict>
      <Popover>
        {({ open }) => (
          <m.header
            className={`fixed top-0 z-50 flex min-h-[3rem] w-full min-w-[20rem] items-center overflow-hidden border-b border-transparent transition duration-300 md:h-[4.5rem] ${
              isScrolled
                ? 'border-rusty-50/10 bg-rusty-900 backdrop-blur-lg [@supports(backdrop-filter:blur(0))]:bg-rusty-900/90 [@supports(backdrop-filter:saturate(0))]:backdrop-saturate-150'
                : ''
            } ${
              isOpen
                ? 'bg-rusty-900 backdrop-blur-lg [@supports(backdrop-filter:blur(0))]:bg-rusty-900/100 [@supports(backdrop-filter:blur(0))]:backdrop-saturate-0'
                : ''
            }`}
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
                        <span className="sr-only">{t('mainNav.title')}</span>
                        {/* <span className="rounded-xl bg-rusty-800 px-3 py-0.5 font-medium">
                          {t('mainNav.title')}
                        </span> */}
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
                              open ? 'translate-y-[-0.5rem] -rotate-45' : ''
                            }`}
                          />
                        </div>
                      </Popover.Button>
                    </div>

                    {/* Desktop navigation */}
                    <nav
                      className="-mr-6 hidden md:block"
                      onMouseLeave={() => setFocused(undefined)}
                      onBlur={() => setFocused(undefined)}
                    >
                      <ul className="flex">
                        {/* TODO: Using 'navigation' loaded with next-i18next doesn't work. Why? */}
                        {/* {t<string, MainNavItemProps[]>('mainNav.items', {
                          returnObjects: true,
                        }).map((item) => ( */}
                        {navigation.map((item) => (
                          <li key={item.id}>
                            <Link
                              className="relative flex h-[4.5rem] items-center px-6 outline-0"
                              href={item.href}
                              onFocus={() => setFocused(item)}
                              // onBlur={() => setFocused(undefined)}
                              onMouseEnter={() => setFocused(item)}
                              // onMouseLeave={() => setFocused(undefined)}
                              tabIndex={0}
                              // role="link"
                              scroll={false}
                            >
                              {/* {console.log('item:', item)}
                              {console.log('focused:', focused)} */}
                              <AnimatePresence>
                                {focused === item ? (
                                  <m.div
                                    // TODO: prevent items from animating to 0 opacity when quickly switching between them
                                    className="absolute inset-x-[10%] inset-y-1/4 z-0 rounded-xl bg-rusty-700"
                                    key={item.id}
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
                    className="h-screen [will-change:filter] md:hidden"
                    as={m.div}
                    key="panel"
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={panelVariants}
                    onAnimationStart={() => setIsOpen(true)}
                  >
                    {({ close }) => (
                      <RemoveScroll>
                        <m.nav
                          key="nav"
                          variants={mobileNavVariants}
                          className="border-t border-rusty-800"
                        >
                          {t<string, MainNavItemProps[]>('mainNav.items', {
                            returnObjects: true,
                          }).map((item) => (
                            <m.div key={item.name} variants={mobileNavItemVariants}>
                              <Link
                                onClick={() => {
                                  close();
                                }}
                                href={item.href}
                                className="block border-b border-rusty-800 px-4 py-3 sm:px-8"
                                scroll={false}
                              >
                                <span className="text-lg">{item.name}</span>
                              </Link>
                            </m.div>
                          ))}
                        </m.nav>
                      </RemoveScroll>
                    )}
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
