import Link from 'next/link';
import PropTypes from 'prop-types';

const TextLink = ({ children, external, href }) => (
  <Link href={href}>
    <a
      className="text-blue-500 hover:text-blue-700"
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  </Link>
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
