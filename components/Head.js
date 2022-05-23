import PropTypes from 'prop-types';
import NextHead from 'next/head';

const Head = ({ title, og, description }) => (
  <NextHead>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="robots" content="noindex, nofollow" />
    {/* <link rel="icon" href="/favicon.ico" /> */}
  </NextHead>
);

Head.propTypes = {
  title: PropTypes.string,
  og: PropTypes.string,
  description: PropTypes.string,
};

Head.defaultProps = {
  title: 'Robin Wittkamp - Fast, reliable and beautiful websites',
  og: 'og.png',
  description:
    "Hi, I'm Robin. I build fast, reliable websites with a simple, modern design and focus on a high level of user experience.",
};

export default Head;
