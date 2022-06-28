import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeather } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faXing, faTwitter } from '@fortawesome/free-brands-svg-icons';

const languages = [{ name: 'Deutsch' }, { name: 'English' }];

const mainNavigation = [
  { name: 'Home', href: '/#home' },
  { name: 'About', href: '/#about' },
  { name: 'Work', href: '/#work' },
  { name: 'Contact', href: '/#contact' },
];

const legalNavigation = [
  { name: 'Imprint', href: '/imprint' },
  { name: 'Privacy policy', href: '/privacy-policy' },
];

const Footer = () => (
  <footer className="min-w-[20rem] pb-8 pt-16 md:pb-16">
    {/* Padding container */}
    <div className="px-4 sm:px-8">
      {/* Margin container */}
      <div className="mx-auto max-w-screen-xl ">
        {/* First Row, 4 columns container */}
        <div className="space-y-8 md:flex md:flex-wrap md:justify-between lg:space-y-0">
          {/* 1 column */}
          <div className="md:flex-[1_1_100%] lg:flex-[2_2_0%]">
            {/* Logo */}
            <FontAwesomeIcon
              icon={faFeather}
              className="w-8 text-neutral-400 dark:text-neutral-500"
            />
            <span className="mt-8 block max-w-xs text-neutral-500 dark:text-neutral-400">
              Fast and reliable websites with a beautiful design and focus on user experience.
            </span>
            {/* Social icons */}
            <div className="mt-8 flex flex-wrap items-center space-x-8">
              {/* GitHub */}
              <a
                className="text-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                href="https://github.com/robinwittkamp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} className="w-6" />
                <span className="sr-only">GitHub</span>
              </a>
              {/* LinkedIn */}
              <a
                className="text-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                href="https://www.linkedin.com/in/robinwittkamp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} className="w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              {/* Xing */}
              <a
                className="text-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                href="https://www.xing.com/profile/Robin_Wittkamp2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faXing} className="w-6" />
                <span className="sr-only">Xing</span>
              </a>
              {/* Twitter */}
              <a
                className="text-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                href="https://twitter.com/robinwittkamp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} className="w-6" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          {/* 2 column */}
          <div className="md:flex-1 lg:flex-1">
            {/* Main navigation */}
            <span className="block font-bold text-neutral-600 dark:text-neutral-200">Menu</span>
            <ul className="mt-2">
              {mainNavigation.map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>
                    <a className="inline-block py-2 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
                      {item.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3 column */}
          <div className="md:flex-1 lg:flex-1">
            {/* Legal navigation */}
            <span className="block font-bold text-neutral-600 dark:text-neutral-200">Legal</span>
            <ul className="mt-2">
              {legalNavigation.map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>
                    <a className="inline-block py-2 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
                      {item.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4 column */}
          <div className="md:flex-1 lg:flex-1">
            {/* Languages */}
            <span className="block font-bold text-neutral-600 dark:text-neutral-200">
              Languages
            </span>
            <ul className="mt-2">
              {languages.map((item) => (
                <li key={item.name}>
                  <Link href="/#">
                    <a className="inline-block py-2 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
                      {item.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Second row, 2 columns container */}
        <div className="mt-8 border-t border-neutral-200 pt-8 dark:border-neutral-800 md:mt-16 md:flex md:flex-row-reverse ">
          <div className="md:flex md:flex-1 md:justify-end">
            {/* Link to repository */}
            <a
              className="inline-block py-2 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
              href="https://github.com/robinwittkamp/robinwittkamp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              View this website on GitHub
            </a>
          </div>

          <div className="md:flex-1">
            {/* Copyright notice */}
            <span className="inline-block py-2 text-neutral-500 dark:text-neutral-400">
              &copy; 2022 Robin Wittkamp
            </span>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
