import { memo, PropsWithChildren, useState } from 'react';
import { Button } from '../atoms/Button/Button';
import { NavigationForm } from '../organisms/NavigationForm/NavigationForm';

type MenuItemProps = {
  setLinks: (links: any) => void;
} & Required<PropsWithChildren>;

export const MenuLinks = memo<MenuItemProps>(({ children, setLinks }) => {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="flex w-full flex-col overflow-hidden rounded-md border-[1px] border-primary">
      {children}
      {showForm && (
        <div className="py-xl px-3xl flex w-full bg-secondary">
          {<NavigationForm setLinks={setLinks} />}
        </div>
      )}
      <Button
        type="primary"
        title="Dodaj pozycję menu"
        onClick={() => setShowForm((prev) => !prev)}
        className="text-secondary-dark mx-6 my-5 bg-white"
      />
    </div>
  );
});
