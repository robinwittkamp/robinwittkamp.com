// import Link from 'next/link';
import PropTypes from 'prop-types';

const TextLink = ({ children, external, href }) => (
  <a
    className="text-blue-500 transition hover:text-blue-600"
    href={href}
    rel={external ? 'noopener noreferrer' : undefined}
    target={external ? '_blank' : undefined}
  >
    {children}
  </a>
);

TextLink.propTypes = {
  children: PropTypes.string.isRequired,
  external: PropTypes.bool,
  href: PropTypes.string.isRequired,
};

TextLink.defaultProps = {
  external: false,
};

export default TextLink;
