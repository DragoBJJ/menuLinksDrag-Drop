import { memo, ReactNode } from 'react';

type DiscountTemplateProps = {
  children?: ReactNode;
};

export const DiscountTemplate = memo<DiscountTemplateProps>(({ children }) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-6">{children}</div>
  );
});
