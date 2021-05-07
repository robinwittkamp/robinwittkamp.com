import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html
        lang="en"
        className="h-full w-full antialiased bg-white text-true-gray-900 dark:bg-true-gray-900 dark:text-white"
      >
        <Head />
        <body className="h-full w-full">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
