import '../styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { config } from '@fortawesome/fontawesome-svg-core';
import localFont from '@next/font/local';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { DefaultSeo } from 'next-seo';

import SEO from '../next-seo.config';

config.autoAddCss = false;

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

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className={`${gilroy.variable} font-sans`}>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </div>
  );
};

export default appWithTranslation(App);
