import clsx from 'clsx';
import Link from 'next/link';
import type { ReactElement, ReactNode } from 'react';

type LinkButtonProps = {
  children: ReactNode | ReactNode[];
  href: string;
  variant: 'primary' | 'secondary' | 'tertiary';
};

const variants = {
  primary: `border-transparent bg-gradient-to-tr from-red-700 to-amber-500 text-white shadow-lg shadow-black/25 hover:brightness-110 hover:shadow-md hover:shadow-black/25`,
  secondary: `border border-rusty-700 bg-rusty-800 text-rusty-100 hover:border-rusty-600 hover:bg-rusty-700 hover:text-white`,
  tertiary: `border border-rusty-700 bg-transparent text-rusty-300 hover:border-rusty-700 hover:bg-rusty-800 hover:text-rusty-100`,
};

const LinkButton = ({ children, href, variant }: LinkButtonProps): ReactElement => {
  const external = href.startsWith('http');

  const variantClasses = variants[variant];
  const classes = clsx(
    `inline-flex items-center rounded-2xl px-6 py-3 text-lg font-extrabold transition ${variantClasses}`
  );

  return (
    <Link
      className={classes}
      href={href}
      rel={external ? 'noopener noreferrer' : undefined}
      target={external ? '_blank' : undefined}
      scroll={external}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
