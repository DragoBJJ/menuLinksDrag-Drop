import { useState } from 'react';

export type LinkAction = 'ADD' | 'EDIT';

export const useLinkAction = () => {
  const [linkAction, setLinkAction] = useState<LinkAction | null>(null);

  const setAddLinkAction = () => {
    setLinkAction('ADD');
  };

  const setEditLinkAction = () => {
    setLinkAction('EDIT');
  };

  const setOffLinkAction = () => {
    setLinkAction(null);
  };

  return {
    linkAction,
    setOffLinkAction,
    setAddLinkAction,
    setEditLinkAction,
  };
};
