import PropTypes from 'prop-types';
import clsx from 'clsx';

const LinkButton = ({ children, link, variant }) => {
  const variantClasses = {
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
      dark:hover:bg-neutral-200
    `,
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
      dark:hover:bg-neutral-800
    `,
  };

  const buttonClasses = clsx(
    `inline-flex
    items-center
    rounded-2xl
    border
    px-6
    py-3
    text-lg
    font-extrabold
    transition
    duration-300`,
    variantClasses[variant]
  );

  return (
    <a href={link} className={buttonClasses}>
      {children}
    </a>
  );
};

LinkButton.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']).isRequired,
};

export default LinkButton;
