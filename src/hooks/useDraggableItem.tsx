import { arrayMove } from '@dnd-kit/sortable';

type DraggableItem = {
  id: number;
};

type useDraggableProps<T extends DraggableItem> = {
  links: T[];
};

export const useDraggableItem = <T extends { id: number }>({ links }: useDraggableProps<T>) => {
  const getTaskPosition = (id: number) => links.findIndex((task) => task.id === id);

  const getNewOrderItems = (e: any) => {
    const { active, over } = e;

    if (active.id === over.id) return;
    const originalPos = getTaskPosition(active.id);
    const newPos = getTaskPosition(over.id);
    return arrayMove(links, originalPos, newPos);
  };

  return { getNewOrderItems };
};
