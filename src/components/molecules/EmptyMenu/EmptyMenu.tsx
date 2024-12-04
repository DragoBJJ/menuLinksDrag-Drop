import { memo, ReactNode } from 'react';
import { Description } from '../../atoms/Description/Description';
import { Header } from '../../atoms/Header/Header';

type EmptyMenuProps = {
  title: string;
  description: string;
  actionButton: ReactNode;
};

export const EmptyMenu = memo<EmptyMenuProps>(({ title, description, actionButton }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-xs">
        <Header title={title} />
        <Description text={description} />
      </div>
      {actionButton}
    </>
  );
});
