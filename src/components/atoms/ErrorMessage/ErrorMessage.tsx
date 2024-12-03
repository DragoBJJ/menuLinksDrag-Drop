import { memo } from 'react';

type ErrorMessageProps = {
  message?: string;
};

export const ErrorMessage = memo<ErrorMessageProps>(({ message }) => {
  return <span className="my-1 h-3 text-sm text-red-500">{message}</span>;
});
