import { memo } from 'react';
import { Button } from '../../atoms/Button/Button';

type ActionButtonsProps = {
  deleteLink: () => void;
  addLinkAction: () => void;
  editLinkAction: () => void;
};

export const ActionButtons = memo<ActionButtonsProps>(
  ({ addLinkAction, deleteLink, editLinkAction }) => {
    return (
      <div className="flex items-center justify-center">
        <Button type="secondary" title="Usuń" className="rounded-r-none" onClick={deleteLink} />
        <Button
          type="secondary"
          title="Edytuj"
          className="rounded-l-none rounded-r-none border-l-0 border-r-0"
          onClick={() => editLinkAction()}
        />
        <Button
          onClick={() => addLinkAction()}
          type="primary"
          title="Dodaj pozycję menu"
          className="rounded-l-none border-secondary-border-gray bg-white text-secondary-dark"
        />
      </div>
    );
  },
);
