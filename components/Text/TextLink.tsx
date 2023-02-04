import Link from 'next/link';
import type { ReactElement, ReactNode } from 'react';

type TextLinkProps = {
  children: ReactNode;
  href: string;
};

const TextLink = ({ children, href }: TextLinkProps): ReactElement => {
  const external = href.startsWith('http');

  const Tag = external ? 'a' : Link;

  return (
    <Tag
      className="text-orange-500 no-underline transition hover:text-orange-400"
      href={href}
      rel={external ? 'noopener noreferrer' : undefined}
      target={external ? '_blank' : undefined}
    >
      {children}
    </Tag>
  );
};

export default TextLink;
