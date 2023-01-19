import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html className="scroll-smooth">
      <Head />
      <body className="bg-rusty-950 text-white antialiased selection:bg-orange-500/75 selection:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
