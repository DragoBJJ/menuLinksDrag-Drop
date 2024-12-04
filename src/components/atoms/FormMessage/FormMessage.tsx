import { memo } from 'react';

type FormMessageProps = {
  type: 'error' | 'success';
  message?: string;
};

export const FormMessage = memo<FormMessageProps>(({ message, type }) => {
  const color = type === 'error' ? 'text-red-500' : 'text-green-500';
  return <span className={`my-1 h-3 text-sm ${color}`}>{message}</span>;
});
