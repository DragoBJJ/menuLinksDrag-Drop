import { Dispatch, memo, ReactNode, SetStateAction, useState } from 'react';
import { Link } from '../../../types/data';
import { Description } from '../../atoms/Description/Description';
import { Header } from '../../atoms/Header/Header';
import { NavigationForm } from '../../organisms/NavigationForm/NavigationForm';
import { ActionButtons } from '../ActionButtons/ActionButtons';

type LinkItemProps = {
  icon?: ReactNode;
  title: string;
  description: string;
  setLinks: Dispatch<SetStateAction<Link[]>>;
};

export const LinkItem = memo<LinkItemProps>(({ icon, title, description, setLinks }) => {
  const [showForm, setShowForm] = useState(false);

  const deleteLinkItem = () => {
    setLinks((prev) => prev.filter((link) => link.title !== title));
  };
  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex min-h-[46px] w-full items-center justify-center border-b-[1px] border-secondary bg-white px-3xl py-xl">
        {icon}
        <div className="flex w-full flex-col items-start justify-center gap-[6px]">
          <Header title={title} />
          <Description text={description} />
        </div>
        <ActionButtons setVisibleForm={setShowForm} deleteLinkItem={deleteLinkItem} />
      </div>

      {showForm && (
        <div className="flex w-full bg-secondary px-3xl py-xl">
          <NavigationForm setLinks={setLinks} setShowForm={setShowForm} />
        </div>
      )}
    </div>
  );
});
