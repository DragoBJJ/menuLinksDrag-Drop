import {
  closestCorners,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';

import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { memo } from 'react';
import AddIcon from '../../../../public/images/add.svg';
import MenuItemIcon from '../../../../public/images/menuItem.svg';
import { useNavLinksContext } from '../../../context/useNavLinksContext';
import { useDraggableItem } from '../../../hooks/useDraggableItem';
import { wrapper } from '../../../styles/style';
import { Button } from '../../atoms/Button/Button';
import { EmptyMenu } from '../EmptyMenu/EmptyMenu';
import { LinkItem } from '../LinkItem/Linktem';
import { LinksWrapper } from '../LinksWrapper/LinksWrapper';

type MenuProps = {
  setAddLinkAction: () => void;
};

export const LinksMenu = memo<MenuProps>(({ setAddLinkAction }) => {
  const { links, deleteLink, setNewLinksOrder } = useNavLinksContext();
  const { getNewOrderItems } = useDraggableItem({ links });

  const handleDraggable = (e: DragEndEvent) => {
    const newOrder = getNewOrderItems(e);
    if (newOrder) setNewLinksOrder(newOrder);
  };

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 250,
        tolerance: 5,
      },
    }),
    useSensor(KeyboardSensor),
  );

  return (
    <DndContext onDragEnd={handleDraggable} sensors={sensors} collisionDetection={closestCorners}>
      <div
        className={`${wrapper} border-secondary p-6 ${links.length ? 'border-none bg-transparent' : 'bg-secondary'}`}
      >
        {links.length ? (
          <SortableContext items={links} strategy={verticalListSortingStrategy}>
            <LinksWrapper setAddLinkAction={setAddLinkAction}>
              {links.map((link, index) => (
                <LinkItem
                  key={`${link.url}-${index}`}
                  icon={<MenuItemIcon className="mr-4 flex" />}
                  link={link}
                  deleteLink={() => deleteLink(link.id)}
                />
              ))}
            </LinksWrapper>
          </SortableContext>
        ) : (
          <EmptyMenu
            title="Menu is Empty"
            description="There are no runes in this menu yet."
            actionButton={
              <Button
                title="Add rune to menu"
                icon={<AddIcon className="cursor-pointer" />}
                onClick={() => setAddLinkAction()}
                className="mt-6 gap-[4px]"
              />
            }
          />
        )}
      </div>
    </DndContext>
  );
});
