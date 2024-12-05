import { memo, PropsWithChildren } from 'react';
import { Button } from '../../atoms/Button/Button';

type MenuLinksWrapperProps = {
  setAddLinkAction: () => void;
} & Required<PropsWithChildren>;

console.log('asdas');
export const LinksWrapper = memo<MenuLinksWrapperProps>(({ children, setAddLinkAction }) => {
  return (
    <div className="flex w-full flex-col overflow-hidden rounded-md border-[1px] border-primary bg-white">
      <div className="w-ful h-full bg-secondary">{children}</div>
      <Button
        type="primary"
        title="Dodaj pozycję menu"
        onClick={() => setAddLinkAction()}
        className="mx-6 my-5 bg-white text-secondary-dark"
      />
    </div>
  );
});
