import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { memo, ReactNode, useState } from 'react';
import { useLinkAction } from '../../../hooks/useLinkAction';
import { Link } from '../../../types/data';
import { Description } from '../../atoms/Description/Description';
import { Header } from '../../atoms/Header/Header';
import { Rune } from '../../atoms/Rune/Rune';
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
  const [isDraggingEnabled, setIsDraggingEnabled] = useState(true);

  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    disabled: !isDraggingEnabled,
    id: link.id,
  });
  const setAddAction = () => {
    setAddLinkAction();
    setIsDraggingEnabled(false);
  };

  const setEditAction = () => {
    setEditLinkAction();
    setIsDraggingEnabled(false);
  };

  const setOffAction = () => {
    setOffLinkAction();
    setIsDraggingEnabled(true);
  };

  const dndStyle = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={dndStyle}
      className={`relative flex h-full w-full flex-col ${isDragging ? 'opacity-70' : 'opacity-100'}`}
    >
      <div
        className={`m-auto flex min-h-[46px] w-full items-center justify-center border-b-[1px] border-secondary bg-white px-3xl py-xl`}
      >
        {icon}
        <div className="flex w-full flex-col items-start justify-center gap-[6px]">
          <div className="flex items-center justify-center gap-2">
            <Header title={link.title} />
            {link.tag && <Tag type={link.url ? 'secondary' : 'primary'} title={link.tag} />}
          </div>
          {link.url && <Description text={link.url} />}
          {link.rune && <Rune />}
        </div>

        <ActionButtons
          deleteLink={() => deleteLink(link.id)}
          setAddAction={setAddAction}
          setEditAction={setEditAction}
        />
      </div>

      {linkAction === 'ADD' && (
        <div className="flex w-full bg-secondary px-3xl py-xl">
          <NavigationForm setOffLinkAction={setOffAction} />
        </div>
      )}

      {linkAction === 'EDIT' && (
        <div className="flex w-full bg-secondary px-3xl py-xl">
          <NavigationForm setOffLinkAction={setOffAction} link={link} />
        </div>
      )}
    </div>
  );
});
