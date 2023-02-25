import Link from 'next/link';
import type { ReactElement, ReactNode } from 'react';

/**
 * Types
 */
type TextLinkProps = {
  children: ReactNode;
  href: string;
};

/**
 * Component
 */
const TextLink = ({ children, href }: TextLinkProps): ReactElement => {
  const isExternal = href.startsWith('http');

  const Tag = isExternal ? 'a' : Link;

  return (
    <Tag
      className="text-orange-500 no-underline transition hover:text-orange-400"
      href={href}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      target={isExternal ? '_blank' : undefined}
    >
      {children}
    </Tag>
  );
};

export default TextLink;
