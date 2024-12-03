import { memo, PropsWithChildren, useState } from 'react';
import { Button } from '../atoms/Button/Button';

type MenuItemProps = {
  setLinks: (links: any) => void;
} & Required<PropsWithChildren>;

export const MenuLinks = memo<MenuItemProps>(({ children, setLinks }) => {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="flex w-full flex-col overflow-hidden rounded-md border-[1px] border-primary">
      {children}
      <Button
        type="primary"
        title="Dodaj pozycję menu"
        onClick={() => setShowForm((prev) => !prev)}
        className="mx-6 my-5 bg-white text-secondary-dark"
      />
    </div>
  );
});
