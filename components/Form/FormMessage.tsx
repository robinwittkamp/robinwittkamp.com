import type { ReactElement } from 'react';

type FormMessageProps = {
  children: string;
  variant: 'error' | 'success';
};

const variants = {
  error: 'bg-red-900 text-red-200',
  success: 'bg-green-900 text-green-200',
};

const FormMessage = ({ children, variant }: FormMessageProps): ReactElement => {
  const variantClasses = variants[variant];

  <div className={`rounded-xl  p-4 text-lg  ${variantClasses}`}>{children}</div>;
};

export default FormMessage;
