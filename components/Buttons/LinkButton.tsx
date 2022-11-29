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
  primary: `border-0 border-transparent bg-gradient-to-tr from-red-700 to-amber-500 text-amber-50 shadow-lg shadow-black/50 hover:border-neutral-200 hover:bg-neutral-200 hover:shadow-md hover:shadow-black/50`,
  secondary: `border-neutral-700 bg-neutral-700 text-neutral-100 hover:border-neutral-600 hover:bg-neutral-600 hover:text-white`,
  tertiary: `border-neutral-800 bg-neutral-900 text-neutral-300 hover:border-neutral-700 hover:bg-neutral-800 hover:text-neutral-100`,
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
