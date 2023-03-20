import clsx from 'clsx';
import NextLink from 'next/link';
import type { ReactElement, ReactNode } from 'react';

/**
 * Types
 */
type CommonButtonProps = {
  children: ReactNode | ReactNode[];
  variant: 'primary' | 'secondary' | 'tertiary';
};

type ConditionalButtonProps =
  | {
      disabled?: never;
      href: string;
      type?: never;
    }
  | {
      disabled?: boolean;
      href?: never;
      type: 'submit' | 'button' | 'reset';
    };

type ButtonProps = CommonButtonProps & ConditionalButtonProps;

/**
 * Variants (Styling)
 */
const variants = {
  primary: `border-transparent bg-gradient-to-tr from-red-700 to-amber-500 text-white shadow-lg shadow-black/25 hover:brightness-110 hover:shadow-md hover:shadow-black/25`,
  secondary: `border border-rusty-700 bg-rusty-800 text-rusty-100 hover:border-rusty-600 hover:bg-rusty-700 hover:text-white`,
  tertiary: `border border-rusty-700 bg-transparent text-rusty-300 hover:border-rusty-700 hover:bg-rusty-800 hover:text-rusty-100`,
};

/**
 * Component
 */
const Button = ({ children, disabled = false, href, type, variant }: ButtonProps): ReactElement => {
  const variantClasses = variants[variant];
  const classes = clsx(
    `inline-flex items-center rounded-2xl px-6 py-3 text-lg font-extrabold transition ${variantClasses}`
  );

  // If 'href' prop is used, render a link
  if (href) {
    const isExternal = href.startsWith('http');
    // const hasId = href.startsWith('/#');

    // If the link is external, use an anchor tag
    // const Tag = isExternal ? 'a' : NextLink;
    // const Tag = isExternal || hasId ? 'a' : NextLink;

    // return (
    //   <NextLink
    //     className={classes}
    //     href={href}
    //     rel={isExternal ? 'noopener noreferrer' : undefined}
    //     target={isExternal ? '_blank' : undefined}
    //     scroll={hasId ? false : undefined}
    //   >
    //     {children}
    //   </NextLink>
    // );

    // If the link is external, use an anchor tag
    if (isExternal) {
      return (
        <a
          className={classes}
          href={href}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          target={isExternal ? '_blank' : undefined}
        >
          {children}
        </a>
      );
    }

    // If the link is internal, use NextLink
    return (
      <NextLink className={classes} href={href} scroll={!href.startsWith('/#')}>
        {children}
      </NextLink>
    );
  }

  // If prop 'type' is used, render a button
  if (type) {
    return (
      <button className={classes} type={type} disabled={disabled}>
        {children}
      </button>
    );
  }

  // If neither 'href' nor 'type' prop is used, show an error
  return <div>Button component requires either a &quot;href&quot; or &quot;type&quot; prop.</div>;
};

export default Button;
