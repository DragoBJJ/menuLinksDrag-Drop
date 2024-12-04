import { useDraggable } from '@dnd-kit/core';

export function Draggable(props: { id: number; children: React.ReactNode }) {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id: props.id,
  });

  return (
    <button ref={setNodeRef} {...listeners} {...attributes}>
      {props.children}
    </button>
  );
}
