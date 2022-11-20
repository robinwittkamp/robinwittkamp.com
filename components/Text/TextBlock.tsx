// import PropTypes from 'prop-types';
import { ReactElement, ReactNode } from 'react';

interface TextBlockProps {
  children: ReactNode | ReactNode[] | string;
}

const TextBlock = ({ children }: TextBlockProps): ReactElement => (
  <p className="text-xl text-neutral-500 dark:text-neutral-400">{children}</p>
);

// TextBlock.propTypes = {
//   children: PropTypes.oneOfType([
//     PropTypes.arrayOf([PropTypes.string, PropTypes.node]),
//     PropTypes.node,
//     PropTypes.string,
//   ]).isRequired,
// };

export default TextBlock;
