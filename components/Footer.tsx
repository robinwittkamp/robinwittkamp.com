import Link from 'next/link';
import { useRouter } from 'next/router';
import type { ReactElement } from 'react';

import localDe from '../locales/de/footer';
import localEn from '../locales/en/footer';
import CodeIcon from '../public/icons/fa-solid/code-solid.svg';
import RobinWittkampLogo from '../public/logos/robin_wittkamp_logo.svg';
import SocialLinks from './Socials/SocialLinks';

const Footer = (): ReactElement => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? localEn : localDe;

  const onLanguageClick = (newLocale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale, scroll: false });
  };

  return (
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
              <RobinWittkampLogo className="h-6 md:h-7" />
              <span className="mt-8 block max-w-[18rem] text-rusty-400">{t.description}</span>
              {/* Social icons */}
              <div className="mt-8">
                <SocialLinks footer />
              </div>
            </div>

            {/* 2 column */}
            <div className="md:flex-1 lg:flex-1">
              {/* Main navigation */}
              <span className="block font-bold text-rusty-200">{t.mainNav.title}</span>
              <ul className="mt-2">
                {t.mainNav.items.map((item) => (
                  <li key={item.id}>
                    <Link
                      className="inline-block py-2 text-rusty-400 transition-colors hover:text-white"
                      href={item.href}
                      scroll={!item.href.startsWith('/#')}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3 column */}
            <div className="md:flex-1 lg:flex-1">
              {/* Legal navigation */}
              <span className="block font-bold text-rusty-200">{t.legalNav.title}</span>
              <ul className="mt-2">
                {t.legalNav.items.map((item) => (
                  <li key={item.id}>
                    <Link
                      className="inline-block py-2 text-rusty-400 transition-colors hover:text-white"
                      href={item.href}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4 column */}
            <div className="md:flex-1 lg:flex-1">
              {/* Languages */}
              <span className="block font-bold text-rusty-200">{t.languageNav.title}</span>
              <ul className="mt-2">
                {t.languageNav.items.map((item) => (
                  <li key={item.id}>
                    <button
                      className="inline-block py-2 text-rusty-400 transition-colors hover:text-white"
                      onClick={() => onLanguageClick(item.locale)}
                      type="button"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Line */}
          <div className="mt-8 h-px bg-gradient-to-r from-rusty-900/0 via-rusty-700/75 to-rusty-900/0 md:mt-16" />

          {/* Second row, 2 columns container */}
          <div className="pt-8 lg:flex lg:flex-row-reverse ">
            <div className="lg:flex lg:flex-1 lg:justify-end">
              {/* Link to repository */}
              <a
                className="inline-block py-2 text-rusty-400 transition-colors hover:text-white"
                href="https://github.com/robinwittkamp/robinwittkamp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-baseline space-x-2">
                  <CodeIcon className="h-3" fill="currentColor" />
                  <span>{t.noteAboutRepo}</span>
                </div>
              </a>
            </div>

            <div className="lg:flex-1">
              {/* Made with */}
              <span className="block py-2 text-rusty-400 lg:text-center">{t.usedTechnologies}</span>
            </div>

            <div className="lg:flex-1">
              {/* Copyright notice */}
              <span className="inline-block py-2 text-rusty-400">
                &copy; {new Date().getFullYear()} Robin Wittkamp
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
