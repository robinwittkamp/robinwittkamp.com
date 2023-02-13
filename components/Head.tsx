// import NextHead from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import type { ReactElement } from 'react';

type HeadProps = {
  title: string;
  description: string;
  noIndex?: boolean;
};

const Head = ({ title, description, noIndex = false }: HeadProps): ReactElement => {
  const router = useRouter();
  const { locale } = router;

  // Languages
  let currentLang = '';
  let alternativeLang = '';
  let currentLangRoute = '';
  let alternativeLangRoute = '';

  if (locale === 'en') {
    // English is selected
    currentLang = 'en-US';
    alternativeLang = 'de-DE';
    currentLangRoute = '/';
    alternativeLangRoute = '/de/';
  } else if (locale === 'de') {
    // German is selected
    currentLang = 'de-DE';
    alternativeLang = 'en-US';
    currentLangRoute = '/de/';
    alternativeLangRoute = '/';
  } else {
    // Default
    currentLang = 'en-US';
    alternativeLang = 'de-DE';
    currentLangRoute = '/';
    alternativeLangRoute = '/de/';
  }

  // Path
  let currentPath = '';

  if (router.asPath === '/') {
    currentPath = '';
  } else {
    const currentPathWithoutFirstSlash = router.asPath.replace('/', '');
    currentPath = `${currentPathWithoutFirstSlash}/`;
  }

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={`${process.env.SITE_URL}${currentLangRoute}${currentPath}`}
        noindex={noIndex}
        openGraph={{
          title,
          description,
          url: `${process.env.SITE_URL}${currentLangRoute}${currentPath}`,
          locale: currentLang,
          images: [
            {
              url: `${process.env.SITE_URL}/images/robinwittkamp_og.jpg`,
              width: 1280,
              height: 640,
              alt: 'Robin Wittkamp',
            },
          ],
        }}
        languageAlternates={[
          {
            hrefLang: currentLang,
            href: `${process.env.SITE_URL}${currentLangRoute}${currentPath}`,
          },
          {
            hrefLang: alternativeLang,
            href: `${process.env.SITE_URL}${alternativeLangRoute}${currentPath}`,
          },
        ]}
      />
      {/* <NextHead>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content={`${noIndex ? 'noindex' : 'index'}, follow`} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#141313" />
        <meta name="msapplication-TileColor" content="#141313" />
        <meta name="theme-color" content="#141313" />
        <meta
          key="theme-color-light"
          name="theme-color"
          content="#ffffff"
          media="(prefers-color-scheme: light)"
        />
        <meta
          key="theme-color-dark"
          name="theme-color"
          content="#141313"
          media="(prefers-color-scheme: dark)"
        />
      </NextHead> */}
    </>
  );
};

export default Head;
