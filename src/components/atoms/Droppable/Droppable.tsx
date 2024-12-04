import { useDroppable } from '@dnd-kit/core';
import { ReactNode } from 'react';

export function Droppable(props: { id: string; children: ReactNode }) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });
  const style = {
    opacity: isOver ? 1 : 0.5,
  };

  return <div ref={setNodeRef}>{props.children}</div>;
}
