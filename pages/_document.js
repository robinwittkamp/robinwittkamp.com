import Document, { Html, Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html
        lang="en"
        className="bg-white text-true-gray-900 antialiased dark:bg-true-gray-900 dark:text-white"
      >
        <Head />
        <body className="px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
