import type { ReactElement } from 'react';

type FieldErrorMessageProps = {
  children: string | undefined;
};

const FieldErrorMessage = ({ children }: FieldErrorMessageProps): ReactElement => (
  <span className="mt-2 block text-sm text-[#ff0000]">{children}</span>
);

export default FieldErrorMessage;
