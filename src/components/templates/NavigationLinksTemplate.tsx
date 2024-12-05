'use client';

import { useLinkAction } from '../../hooks/useLinkAction';
import { LinksMenu } from '../molecules/LinksMenu/LinksMenu';
import { NavigationForm } from '../organisms/NavigationForm/NavigationForm';

export const NavigationLinksTemplate = () => {
  const { linkAction, setAddLinkAction, setOffLinkAction } = useLinkAction();

  return (
    <div className="flex h-full min-h-[560px] w-full flex-col items-center justify-start border-[1px] border-dotted border-third-border-purple p-6">
      <div className="flex h-full w-full flex-col items-center justify-center gap-l">
        <LinksMenu setAddLinkAction={setAddLinkAction} />
        {linkAction === 'ADD' && <NavigationForm setOffLinkAction={setOffLinkAction} />}
      </div>
    </div>
  );
};
