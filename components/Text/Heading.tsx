import clsx from 'clsx';
import type { ReactElement } from 'react';

interface HeadingProps {
  children: string;
  classes?: string;
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const variants = {
  h1: 'text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl',
  h2: 'text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl',
  h3: 'text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl',
  h4: 'text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl',
  h5: 'text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl',
  h6: 'text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl',
};

const Heading = ({ children, classes, variant }: HeadingProps): ReactElement => {
  const Tag = variant;
  const variantClasses = variants[variant];

  const mergedClasses = clsx(`font-gilroy font-black ${variantClasses} ${classes}`);

  return <Tag className={mergedClasses}>{children}</Tag>;
};

export default Heading;
