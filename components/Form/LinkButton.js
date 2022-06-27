import PropTypes from 'prop-types';
import ctl from '@netlify/classnames-template-literals';
import Link from 'next/link';

const variants = {
  primary: `
    border-neutral-800
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
    border-neutral-100
    bg-neutral-100
    text-neutral-800
    hover:border-neutral-200
    hover:bg-neutral-200
    hover:text-neutral-900
    dark:border-neutral-800
    dark:bg-neutral-800
    dark:text-neutral-100
    dark:hover:border-neutral-700
    dark:hover:bg-neutral-700
    dark:hover:text-white`,
  tertiary: `
    border-neutral-100
    bg-white
    text-neutral-700
    hover:border-neutral-200
    hover:bg-neutral-100
    hover:text-neutral-800
    dark:border-neutral-800
    dark:bg-neutral-900
    dark:text-neutral-300
    dark:hover:border-neutral-700
    dark:hover:bg-neutral-800
    dark:hover:text-neutral-100`,
};

const LinkButton = ({ children, link, external, variant }) => {
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
      <a
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener' : undefined}
      >
        {children}
      </a>
    </Link>
  );
};

LinkButton.propTypes = {
  children: PropTypes.node.isRequired,
  external: PropTypes.bool,
  link: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']).isRequired,
};

LinkButton.defaultProps = {
  external: false,
};

export default LinkButton;
