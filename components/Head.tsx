// import PropTypes from 'prop-types';
import NextHead from 'next/head';
import type { ReactElement } from 'react';

interface HeadProps {
  title?: string;
  description?: string;
}

const Head = ({
  title = 'Robin Wittkamp - Fast, reliable and beautiful websites',
  description = `Hi, I'm Robin. I build fast, reliable websites with a simple, modern design and focus on a high level of user experience.`,
}: HeadProps): ReactElement => (
  <NextHead>
    {/* Title */}
    <title>{title}</title>
    {/* SEO */}
    <meta name="description" content={description} />
    <meta name="robots" content="noindex, nofollow" />
    {/* Favicon & colors */}
    <link rel="icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#171717" />
    <meta name="msapplication-TileColor" content="#171717" />
    <meta
      key="theme-color-light"
      name="theme-color"
      content="#ffffff"
      media="(prefers-color-scheme: light)"
    />
    <meta
      key="theme-color-dark"
      name="theme-color"
      content="#171717"
      media="(prefers-color-scheme: dark)"
    />
  </NextHead>
);

// Head.propTypes = {
//   title: PropTypes.string,
//   og: PropTypes.string,
//   description: PropTypes.string,
// };

// Head.defaultProps = {
//   title: 'Robin Wittkamp - Fast, reliable and beautiful websites',
//   og: 'og.png',
//   description:
//     "Hi, I'm Robin. I build fast, reliable websites with a simple, modern design and focus on a high level of user experience.",
// };

export default Head;
