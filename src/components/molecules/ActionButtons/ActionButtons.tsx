import { memo } from 'react';
import { Button } from '../../atoms/Button/Button';

type ActionButtonsProps = {
  deleteLink: () => void;
  setAddAction: () => void;
  setEditAction: () => void;
  downloadRune: () => void;
};

export const ActionButtons = memo<ActionButtonsProps>(
  ({ setAddAction, deleteLink, setEditAction, downloadRune }) => {
    return (
      <div className="flex items-center justify-center">
        <Button type="secondary" title="Delete" className="rounded-r-none" onClick={deleteLink} />
        <Button
          type="secondary"
          title="Edit"
          className="rounded-l-none rounded-r-none border-l-0 border-r-0"
          onClick={setEditAction}
        />
        <Button
          type="primary"
          title="download"
          className="rounded-l-none rounded-r-none border-l-0 border-r-0"
          onClick={downloadRune}
        />
        <Button
          onClick={setAddAction}
          type="secondary"
          title="Add"
          className="rounded-l-none border-primary bg-white text-secondary-dark"
        />
      </div>
    );
  },
);
