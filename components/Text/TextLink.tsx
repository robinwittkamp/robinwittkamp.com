import Link from 'next/link';
import type { ReactElement, ReactNode } from 'react';

type TextLinkProps = {
  children: ReactNode;
  external?: boolean;
  href: string;
};

const TextLink = ({ children, external = false, href }: TextLinkProps): ReactElement => {
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
