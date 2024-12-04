'use client';

import { memo } from 'react';
import { useLinkAction } from '../../hooks/useFormAction';
import { LinksMenu } from '../molecules/LinksMenu/LinksMenu';
import { NavigationForm } from '../organisms/NavigationForm/NavigationForm';

type NavigationLinksTemplateProps = {};

export const NavigationLinksTemplate = memo<NavigationLinksTemplateProps>(() => {
  const { linkAction, setAddLinkAction, setOffLinkAction } = useLinkAction();

  return (
    <div className="flex h-full min-h-[560px] w-full flex-col items-center justify-start border-[1px] border-dotted border-third-border-purple p-6">
      <div className="flex h-full w-full flex-col items-center justify-center gap-l">
        <LinksMenu setAddLinkAction={setAddLinkAction} />
        {linkAction === 'ADD' && <NavigationForm setOffLinkAction={setOffLinkAction} />}
      </div>
    </div>
  );
});
