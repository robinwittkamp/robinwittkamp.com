import PropTypes from 'prop-types';

const TextBlock = ({ children }) => (
  <p className="text-xl text-neutral-500 dark:text-neutral-400">{children}</p>
);

TextBlock.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf([PropTypes.string, PropTypes.node]),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
};

export default TextBlock;
