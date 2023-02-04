import type { ReactElement, ReactNode } from 'react';

type UnstyledTextWrapperProps = {
  children: ReactNode | ReactNode[];
};

const UnstyledTextWrapper = ({ children }: UnstyledTextWrapperProps): ReactElement => (
  <div className="prose prose-invert max-w-none prose-headings:mb-4 prose-headings:mt-6 prose-headings:text-white prose-p:text-rusty-300">
    {children}
  </div>
);

export default UnstyledTextWrapper;
