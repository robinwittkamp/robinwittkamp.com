import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html className="bg-rusty-950 text-white antialiased selection:bg-orange-500/75 selection:text-white">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
