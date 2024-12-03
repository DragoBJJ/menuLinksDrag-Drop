import { Dispatch, memo, SetStateAction } from 'react';
import { Button } from '../../atoms/Button/Button';

type ActionButtonsProps = {
  setVisibleForm: Dispatch<SetStateAction<boolean>>;
  deleteLinkItem: () => void;
};

export const ActionButtons = memo<ActionButtonsProps>(({ setVisibleForm, deleteLinkItem }) => {
  return (
    <div className="flex items-center justify-center">
      <Button type="secondary" title="Usuń" className="rounded-r-none" onClick={deleteLinkItem} />
      <Button
        type="secondary"
        title="Edytuj"
        className="rounded-l-none rounded-r-none border-l-0 border-r-0"
      />
      <Button
        onClick={() => setVisibleForm((prev) => !prev)}
        type="primary"
        title="Dodaj pozycję menu"
        className="rounded-l-none border-secondary-border-gray bg-white text-secondary-dark"
      />
    </div>
  );
});
