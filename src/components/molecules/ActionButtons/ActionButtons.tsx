import { memo } from 'react';
import { Button } from '../../atoms/Button/Button';

type ActionButtonsProps = {
  deleteLink: () => void;
  setAddAction: () => void;
  setEditAction: () => void;
};

export const ActionButtons = memo<ActionButtonsProps>(
  ({ setAddAction, deleteLink, setEditAction }) => {
    return (
      <div className="flex items-center justify-center">
        <Button type="secondary" title="Usuń" className="rounded-r-none" onClick={deleteLink} />
        <Button
          type="secondary"
          title="Edytuj"
          className="rounded-l-none rounded-r-none border-l-0 border-r-0"
          onClick={() => setEditAction()}
        />
        <Button
          onClick={() => setAddAction()}
          type="primary"
          title="Dodaj pozycję menu"
          className="rounded-l-none border-secondary-border-gray bg-white text-secondary-dark"
        />
      </div>
    );
  },
);
