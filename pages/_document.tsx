import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => (
  <Html
    lang="en"
    className="bg-white text-neutral-900 antialiased dark:bg-neutral-900 dark:text-white"
  >
    <Head />
    <body className="">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
