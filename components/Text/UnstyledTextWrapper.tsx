import type { ReactElement, ReactNode } from 'react';

/**
 * Types
 */
type UnstyledTextWrapperProps = {
  children: ReactNode | ReactNode[];
};

/**
 * Component
 */
const UnstyledTextWrapper = ({ children }: UnstyledTextWrapperProps): ReactElement => (
  <div className="prose prose-invert max-w-none marker:text-rusty-300 prose-headings:mb-4 prose-headings:mt-6 prose-headings:text-white prose-p:text-rusty-300">
    {children}
  </div>
);

export default UnstyledTextWrapper;
