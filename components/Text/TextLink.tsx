import Link from 'next/link';
import type { ReactElement, ReactNode } from 'react';

type TextLinkProps = {
  children: ReactNode;
  external?: boolean;
  href: string;
};

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

export default TextLink;
