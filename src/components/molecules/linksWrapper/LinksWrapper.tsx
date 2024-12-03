import { memo, PropsWithChildren } from 'react';
import { Button } from '../../atoms/Button/Button';

type MenuItemProps = {
  setAddLinkAction: () => void;
} & Required<PropsWithChildren>;

export const LinksWrapper = memo<MenuItemProps>(({ children, setAddLinkAction }) => {
  return (
    <div className="flex w-full flex-col overflow-hidden rounded-md border-[1px] border-primary">
      {children}
      <Button
        type="primary"
        title="Dodaj pozycję menu"
        onClick={() => setAddLinkAction()}
        className="mx-6 my-5 bg-white text-secondary-dark"
      />
    </div>
  );
});
