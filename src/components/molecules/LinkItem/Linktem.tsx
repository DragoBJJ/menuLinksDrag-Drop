import { memo, ReactNode } from 'react';
import { useLinkAction } from '../../../hooks/useFormAction';
import { Link } from '../../../types/data';
import { Description } from '../../atoms/Description/Description';
import { Header } from '../../atoms/Header/Header';
import { Tag } from '../../atoms/Tag/Tag';
import { NavigationForm } from '../../organisms/NavigationForm/NavigationForm';
import { ActionButtons } from '../ActionButtons/ActionButtons';

type LinkItemProps = {
  icon?: ReactNode;
  link: Link;
  deleteLink: (id: Link['id']) => void;
};

export const LinkItem = memo<LinkItemProps>(({ icon, link, deleteLink }) => {
  const { linkAction, setAddLinkAction, setEditLinkAction, setOffLinkAction } = useLinkAction();

  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex min-h-[46px] w-full items-center justify-center border-b-[1px] border-secondary bg-white px-3xl py-xl">
        {icon}
        <div className="flex w-full flex-col items-start justify-center gap-[6px]">
          <div className="flex items-center justify-center gap-2">
            <Header title={link.title} />
            {link.tag && <Tag title={link.tag} />}
          </div>
          <Description text={link.url} />
        </div>
        <ActionButtons
          deleteLink={() => deleteLink(link.id)}
          setAddAction={setAddLinkAction}
          setEditAction={setEditLinkAction}
        />
      </div>

      {linkAction === 'ADD' && (
        <div className="flex w-full bg-secondary px-3xl py-xl">
          <NavigationForm setOffLinkAction={setOffLinkAction} />
        </div>
      )}

      {linkAction === 'EDIT' && (
        <div className="flex w-full bg-secondary px-3xl py-xl">
          <NavigationForm setOffLinkAction={setOffLinkAction} link={link} />
        </div>
      )}
    </div>
  );
});
