import type { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  // title: 'Robin Wittkamp',
  // defaultTitle: 'Robin Wittkamp',
  // titleTemplate: '%s - Robin Wittkamp',
  // description: '',
  // canonical: 'https://robinwittkamp.com/',
  // languageAlternates: [
  //   {
  //     hrefLang: 'en',
  //     href: 'https://robinwittkamp.com/',
  //   },
  //   {
  //     hrefLang: 'de',
  //     href: 'https://robinwittkamp.com/de/',
  //   },
  // ],
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'msapplication-TileColor',
      content: '#141313',
    },
  ],
  themeColor: '#141313',
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'mask-icon',
      href: '/safari-pinned-tab.svg',
      color: '#141313',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
  robotsProps: {
    maxImagePreview: 'none',
    maxSnippet: -1,
    maxVideoPreview: -1,
    noimageindex: true,
  },
  openGraph: {
    type: 'website',
    // locale: 'en_US',
    // url: 'https://robinwittkamp.com/',
    siteName: 'Robin Wittkamp',
    // title: 'Robin Wittkamp',
    // description: '',
  },
  twitter: {
    handle: '@robinwittkamp',
    site: '@robinwittkamp',
    cardType: 'summary_large_image',
  },
};

export default config;