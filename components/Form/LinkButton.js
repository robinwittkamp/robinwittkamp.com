import PropTypes from 'prop-types';
import ctl from '@netlify/classnames-template-literals';
import Link from 'next/link';

const variants = {
  primary: `
    border-transparent
    bg-neutral-800
    text-white
    shadow-lg
    shadow-blue-500/50
    hover:bg-neutral-900
    hover:shadow-md
    hover:shadow-blue-500/50
    dark:bg-white
    dark:text-neutral-900
    dark:hover:bg-neutral-200`,
  secondary: `
    border-blue-100
    bg-neutral-50
    text-neutral-700
    shadow-lg
    shadow-blue-500/25
    hover:bg-neutral-100
    hover:shadow-md
    hover:shadow-blue-500/25
    dark:border-neutral-700
    dark:bg-neutral-900
    dark:text-white
    dark:hover:bg-neutral-800`,
  tertiary: `
    border-neutral-50
    bg-neutral-50
    text-neutral-600
    hover:bg-neutral-200
    hover:border-neutral-200
    dark:border-neutral-700
    dark:bg-neutral-900
    dark:text-white
    dark:hover:bg-neutral-800`,
};

const LinkButton = ({ children, link, variant }) => {
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
    <Link href={link}>
      <a className={classes}>{children}</a>
    </Link>
  );
};

LinkButton.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']).isRequired,
};

export default LinkButton;
