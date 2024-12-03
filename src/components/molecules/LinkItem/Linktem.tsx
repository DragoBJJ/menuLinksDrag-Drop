import { memo, ReactNode } from 'react';
import { Description } from '../../atoms/Description/Description';
import { Header } from '../../atoms/Header/Header';

type LinkItemProps = {
  icon?: ReactNode;
  title: string;
  description: string;
  renderActionButtons?: ReactNode;
  form: JSX.Element;
  showForm?: boolean;
};

export const LinkItem = memo<LinkItemProps>(
  ({ icon, title, description, renderActionButtons, form, showForm }) => {
    return (
      <div className="flex h-full w-full flex-col">
        <div className="py-xl px-3xl flex min-h-[46px] w-full items-center justify-center border-b-[1px] border-secondary bg-white">
          {icon}
          <div className="flex w-full flex-col items-start justify-center gap-[6px]">
            <Header title={title} />
            <Description text={description} />
          </div>
          {renderActionButtons && renderActionButtons}
        </div>

        {showForm && <div className="py-xl px-3xl flex w-full bg-secondary">{form}</div>}
      </div>
    );
  },
);
