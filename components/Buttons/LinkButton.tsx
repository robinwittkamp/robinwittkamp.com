import ctl from '@netlify/classnames-template-literals';
import Link from 'next/link';
import type { ReactElement, ReactNode } from 'react';
// import PropTypes from 'prop-types';

interface LinkButtonProps {
  children: ReactNode;
  external?: boolean;
  href: string;
  variant: 'primary' | 'secondary' | 'tertiary';
}

const variants = {
  primary: `
    border-white
    bg-white
    text-neutral-900
    shadow-lg
    shadow-black/100
    hover:border-neutral-200
    hover:bg-neutral-200
    hover:shadow-md
    hover:shadow-black/100`,
  secondary: `
    border-neutral-700
    bg-neutral-700
    text-neutral-100
    hover:border-neutral-600
    hover:bg-neutral-600
    hover:text-white`,
  tertiary: `
    border-neutral-800
    bg-neutral-900
    text-neutral-300
    hover:border-neutral-700
    hover:bg-neutral-800
    hover:text-neutral-100`,
};

const LinkButton = ({
  children,
  external = false,
  href,
  variant,
}: LinkButtonProps): ReactElement => {
  const variantClasses = variants[variant];

  const classes = ctl(
    `inline-flex
    items-center
    rounded-2xl
    border
    px-6
    py-3
    text-lg
    font-extrabold
    transition
    duration-300
    ${variantClasses}`
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

// LinkButton.propTypes = {
//   children: PropTypes.node.isRequired,
//   external: PropTypes.bool,
//   href: PropTypes.string.isRequired,
//   variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']).isRequired,
// };

// LinkButton.defaultProps = {
//   external: false,
// };

export default LinkButton;
