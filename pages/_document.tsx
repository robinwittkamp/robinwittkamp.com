import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html className="bg-neutral-900 text-white antialiased">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
