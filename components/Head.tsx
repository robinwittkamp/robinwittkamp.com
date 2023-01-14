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
  const currentLang = locale === 'en' ? 'en-US' : 'de-DE';

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        noindex={noIndex}
        openGraph={{
          title,
          description,
          locale: currentLang,
        }}
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
