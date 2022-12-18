import clsx from 'clsx';
import Link from 'next/link';
import type { ReactElement, ReactNode } from 'react';

interface LinkButtonProps {
  children: ReactNode;
  external?: boolean;
  href: string;
  variant: 'primary' | 'secondary' | 'tertiary';
}

const variants = {
  primary: `border-0 border-transparent bg-gradient-to-tr from-red-700 to-amber-500 text-white shadow-lg shadow-black/50 hover:border-rusty-200 hover:bg-rusty-200 hover:shadow-md hover:shadow-black/50`,
  secondary: `border-rusty-700 bg-rusty-700 text-rusty-100 hover:border-rusty-600 hover:bg-rusty-600 hover:text-white`,
  tertiary: `border-rusty-800 bg-rusty-900 text-rusty-300 hover:border-rusty-700 hover:bg-rusty-800 hover:text-rusty-100`,
};

const LinkButton = ({
  children,
  external = false,
  href,
  variant,
}: LinkButtonProps): ReactElement => {
  const variantClasses = variants[variant];

  const classes = clsx(
    `inline-flex items-center rounded-2xl border px-6 py-3 text-lg font-extrabold transition duration-300 ${variantClasses}`
  );

  return (
    <Link
      className={classes}
      href={href}
      rel={external ? 'noopener noreferrer' : undefined}
      target={external ? '_blank' : undefined}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
