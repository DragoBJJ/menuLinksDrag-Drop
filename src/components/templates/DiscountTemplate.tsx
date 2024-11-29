import { memo, ReactNode } from 'react';

type DiscountTemplateProps = {
  children?: ReactNode;
};

export const DiscountTemplate = memo<DiscountTemplateProps>(({ children }) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center border-[1px] border-sky-500 p-6">
      {children}
    </div>
  );
});
