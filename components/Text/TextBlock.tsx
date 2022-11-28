import type { ReactElement, ReactNode } from 'react';

interface TextBlockProps {
  children: ReactNode | ReactNode[] | string;
}

const TextBlock = ({ children }: TextBlockProps): ReactElement => (
  <p className="text-xl text-neutral-400">{children}</p>
);

export default TextBlock;
