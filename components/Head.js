import PropTypes from 'prop-types';
import NextHead from 'next/head';

const Head = ({ title, og, description }) => (
  <NextHead>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="robots" content="noindex, nofollow" />
    <link rel="icon" href="/favicon.ico" />
  </NextHead>
);

Head.propTypes = {
  title: PropTypes.string,
  og: PropTypes.string,
  description: PropTypes.string,
};

Head.defaultProps = {
  title: 'Robin Wittkamp | Corporate design and web development',
  og: 'og.png',
  description:
    "Hi, I'm Robin. I am a student in Visual Computing and Design from Germany. I create corporate designs and develop websites.",
};

export default Head;
