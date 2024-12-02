import { memo, ReactNode } from 'react';
import { Description } from '../../atoms/Description/Description';
import { Header } from '../../atoms/Header/Header';

type MenuItemProps = {
  icon?: ReactNode;
  title: string;
  description: string;
};

export const MenuItem = memo<MenuItemProps>(({ icon, title, description }) => {
  return (
    <div className="border- py-xl px-3xl flex min-h-[46px] w-full items-center justify-center border-[1px] border-secondary bg-white">
      {icon}
      <div className="flex w-full flex-col items-start justify-center gap-[6px]">
        <Header title={title} />
        <Description text={description} />
      </div>
    </div>
  );
});
