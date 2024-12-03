import { Dispatch, memo, ReactNode, SetStateAction } from 'react';
import { useLinkAction } from '../../../hooks/useFormAction';
import { Link } from '../../../types/data';
import { Description } from '../../atoms/Description/Description';
import { Header } from '../../atoms/Header/Header';
import { NavigationForm } from '../../organisms/NavigationForm/NavigationForm';
import { ActionButtons } from '../ActionButtons/ActionButtons';

type LinkItemProps = {
  icon?: ReactNode;
  link: Link;
  setLinks: Dispatch<SetStateAction<Link[]>>;
};

export const LinkItem = memo<LinkItemProps>(({ icon, link, setLinks }) => {
  const { setAddLinkAction, setEditLinkAction, linkAction, setOffLinkAction } = useLinkAction();

  const deleteLinkItem = () => {
    setLinks((prev) => prev.filter((link) => link.id !== link.id));
  };

  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex min-h-[46px] w-full items-center justify-center border-b-[1px] border-secondary bg-white px-3xl py-xl">
        {icon}
        <div className="flex w-full flex-col items-start justify-center gap-[6px]">
          <Header title={link.title} />
          <Description text={link.url} />
        </div>
        <ActionButtons
          deleteLinkItem={deleteLinkItem}
          addLinkItem={setAddLinkAction}
          editLinkItem={setEditLinkAction}
        />
      </div>

      {linkAction === 'ADD' && (
        <div className="flex w-full bg-secondary px-3xl py-xl">
          <NavigationForm setLinks={setLinks} setOffLinkAction={setOffLinkAction} />
        </div>
      )}

      {linkAction === 'EDIT' && (
        <div className="flex w-full bg-secondary px-3xl py-xl">
          <NavigationForm setLinks={setLinks} setOffLinkAction={setOffLinkAction} link={link} />
        </div>
      )}
    </div>
  );
});
