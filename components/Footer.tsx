import { faGithub, faLinkedin, faTwitter, faXing } from '@fortawesome/free-brands-svg-icons';
import { faCode, faFeather } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import type { ReactElement } from 'react';

type MainNavItemProps = {
  id: number;
  name: string;
  href: string;
};

type LegalNavItemProps = {
  id: number;
  name: string;
  href: string;
};

type LanguageNavItemProps = {
  id: number;
  name: string;
  locale: string;
};

const Footer = (): ReactElement => {
  const router = useRouter();

  const onLanguageClick = (newLocale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale, scroll: false });
  };

  const { t, ready } = useTranslation('footer');
  if (!ready) return <span>Loading translations...</span>;

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
              <FontAwesomeIcon icon={faFeather} className="text-3xl text-rusty-500" />
              <span className="mt-8 block max-w-[18rem] text-rusty-400">{t('description')}</span>
              {/* Social icons */}
              <div className="mt-8 flex flex-wrap items-center space-x-8">
                {/* GitHub */}
                <a
                  className="text-rusty-400 hover:text-white"
                  href="https://github.com/robinwittkamp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} className="text-2xl" />
                  <span className="sr-only">GitHub</span>
                </a>
                {/* LinkedIn */}
                <a
                  className="text-rusty-400 hover:text-white"
                  href="https://www.linkedin.com/in/robinwittkamp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                {/* Xing */}
                <a
                  className="text-rusty-400 hover:text-white"
                  href="https://www.xing.com/profile/Robin_Wittkamp2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faXing} className="text-2xl" />
                  <span className="sr-only">Xing</span>
                </a>
                {/* Twitter */}
                <a
                  className="text-rusty-400 hover:text-white"
                  href="https://twitter.com/robinwittkamp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
                  <span className="sr-only">Twitter</span>
                </a>
              </div>
            </div>

            {/* 2 column */}
            <div className="md:flex-1 lg:flex-1">
              {/* Main navigation */}
              <span className="block font-bold text-rusty-200">{t('mainNav.title')}</span>
              <ul className="mt-2">
                {t<string, MainNavItemProps[]>('mainNav.items', { returnObjects: true }).map(
                  (item) => (
                    <li key={item.id}>
                      <Link
                        className="inline-block py-2 text-rusty-400 hover:text-white"
                        href={item.href}
                        scroll={false}
                      >
                        {item.name}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* 3 column */}
            <div className="md:flex-1 lg:flex-1">
              {/* Legal navigation */}
              <span className="block font-bold text-rusty-200">{t('legalNav.title')}</span>
              <ul className="mt-2">
                {t<string, LegalNavItemProps[]>('legalNav.items', { returnObjects: true }).map(
                  (item) => (
                    <li key={item.id}>
                      <Link
                        className="inline-block py-2 text-rusty-400 hover:text-white"
                        href={item.href}
                      >
                        {item.name}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* 4 column */}
            <div className="md:flex-1 lg:flex-1">
              {/* Languages */}
              <span className="block font-bold text-rusty-200">{t('languageNav.title')}</span>
              <ul className="mt-2">
                {t<string, LanguageNavItemProps[]>('languageNav.items', {
                  returnObjects: true,
                }).map((item) => (
                  <li key={item.id}>
                    <button
                      className="inline-block py-2 text-rusty-400 hover:text-white"
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
                className="inline-block py-2 text-rusty-400 hover:text-white"
                href="https://github.com/robinwittkamp/robinwittkamp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faCode} className="w-3" />
                  <span>{t('linkToGitHubTitle')}</span>
                </div>
              </a>
            </div>

            <div className="lg:flex-1">
              {/* Made with */}
              <span className="block py-2 text-rusty-400 lg:text-center">{t('madeWith')}</span>
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
