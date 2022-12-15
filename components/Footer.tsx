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
  if (!ready) return <span>loading translations...</span>;

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
              <FontAwesomeIcon icon={faFeather} className="text-3xl text-neutral-500" />
              <span className="mt-8 block max-w-[18rem] text-neutral-400">{t('description')}</span>
              {/* Social icons */}
              <div className="mt-8 flex flex-wrap items-center space-x-8">
                {/* GitHub */}
                <a
                  className="text-neutral-400 hover:text-white"
                  href="https://github.com/robinwittkamp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} className="text-2xl" />
                  <span className="sr-only">GitHub</span>
                </a>
                {/* LinkedIn */}
                <a
                  className="text-neutral-400 hover:text-white"
                  href="https://www.linkedin.com/in/robinwittkamp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                {/* Xing */}
                <a
                  className="text-neutral-400 hover:text-white"
                  href="https://www.xing.com/profile/Robin_Wittkamp2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faXing} className="text-2xl" />
                  <span className="sr-only">Xing</span>
                </a>
                {/* Twitter */}
                <a
                  className="text-neutral-400 hover:text-white"
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
              <span className="block font-bold text-neutral-200">{t('mainNav.title')}</span>
              <ul className="mt-2">
                {t<string, MainNavItemProps[]>('mainNav.items', { returnObjects: true }).map(
                  (item) => (
                    <li key={item.id}>
                      <a
                        href={item.href}
                        className="inline-block py-2 text-neutral-400 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* 3 column */}
            <div className="md:flex-1 lg:flex-1">
              {/* Legal navigation */}
              <span className="block font-bold text-neutral-200">{t('legalNav.title')}</span>
              <ul className="mt-2">
                {t<string, LegalNavItemProps[]>('legalNav.items', { returnObjects: true }).map(
                  (item) => (
                    <li key={item.id}>
                      <Link
                        href={item.href}
                        className="inline-block py-2 text-neutral-400 hover:text-white"
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
              <span className="block font-bold text-neutral-200">{t('languageNav.title')}</span>
              <ul className="mt-2">
                {t<string, LanguageNavItemProps[]>('languageNav.items', {
                  returnObjects: true,
                }).map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      // href="/"
                      // locale={item.locale}
                      className="inline-block py-2 text-neutral-400 hover:text-white"
                      onClick={() => onLanguageClick(item.locale)}
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Second row, 2 columns container */}
          <div className="mt-8 border-t border-neutral-800 pt-8 md:mt-16 md:flex md:flex-row-reverse ">
            <div className="md:flex md:flex-1 md:justify-end">
              {/* Link to repository */}
              <a
                className="inline-block py-2 text-neutral-400 hover:text-white"
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

            <div className="md:flex-1">
              {/* Copyright notice */}
              <span className="inline-block py-2 text-neutral-400">
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
