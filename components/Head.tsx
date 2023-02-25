import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import type { ReactElement } from 'react';

/**
 * Types
 */
type HeadProps = {
  title: string;
  description: string;
  noIndex?: boolean;
};

/**
 * Component
 */
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
  );
};

export default Head;
