import Link from 'next/link';
import { ReactElement, ReactNode } from 'react';
// import PropTypes from 'prop-types';

interface TextLinkProps {
  children: ReactNode;
  external?: boolean;
  href: string;
}

const TextLink = ({ children, external = false, href }: TextLinkProps): ReactElement => (
  <Link
    className="text-blue-500 transition hover:text-blue-600"
    href={href}
    rel={external ? 'noopener noreferrer' : undefined}
    target={external ? '_blank' : undefined}
  >
    {children}
  </Link>
);

// TextLink.propTypes = {
//   children: PropTypes.string.isRequired,
//   external: PropTypes.bool,
//   href: PropTypes.string.isRequired,
// };

// TextLink.defaultProps = {
//   external: false,
// };

export default TextLink;
