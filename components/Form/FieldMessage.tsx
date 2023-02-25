import type { ReactElement } from 'react';

/**
 * Types
 */
type FieldMessageProps = {
  children: string | undefined;
};

/**
 * Component
 */
const FieldMessage = ({ children }: FieldMessageProps): ReactElement => (
  <span className="mt-2 block text-sm text-[#ff0000]">{children}</span>
);

export default FieldMessage;
