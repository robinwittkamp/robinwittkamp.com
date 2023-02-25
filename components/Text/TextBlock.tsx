import clsx from 'clsx';
import type { ReactElement, ReactNode } from 'react';

/**
 * Types
 */
type TextBlockProps = {
  children: ReactNode | ReactNode[] | string;
  classes?: string;
};

/**
 * Component
 */
const TextBlock = ({ children, classes }: TextBlockProps): ReactElement => {
  const mergedClasses = clsx(`text-xl text-rusty-400 ${classes ?? ''}`);

  return <p className={mergedClasses}>{children}</p>;
};

export default TextBlock;
