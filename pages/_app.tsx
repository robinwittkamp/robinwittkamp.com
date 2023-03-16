import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
import { DefaultSeo } from 'next-seo';

import SEO from '@/next-seo.config';

/**
 * Fonts
 */
const gilroy = localFont({
  src: [
    {
      path: '../public/fonts/gilroy-extrabold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/fonts/gilroy-black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-gilroy',
});

/**
 * Component
 */
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-gilroy: ${gilroy.style.fontFamily};
          }
        `}
      </style>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
};

export default App;
