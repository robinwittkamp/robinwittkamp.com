import type { ReactElement } from 'react';

type FormMessageProps = {
  children: string;
  variant: 'error' | 'success';
};

const variants = {
  error: 'bg-red-600 text-red-50',
  success: 'bg-green-600 text-green-50',
};

const FormMessage = ({ children, variant }: FormMessageProps): ReactElement => {
  const variantClasses = variants[variant];

  return <div className={`rounded-xl p-4 text-lg ${variantClasses}`}>{children}</div>;
};

export default FormMessage;
