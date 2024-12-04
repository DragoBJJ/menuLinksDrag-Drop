'use client';

import { memo } from 'react';
import { useNavLinksContext } from '../../context/useNavLinksContext';
import { useLinkAction } from '../../hooks/useFormAction';
import { LinksMenu } from '../molecules/LinksMenu/LinksMenu';
import { NavigationForm } from '../organisms/NavigationForm/NavigationForm';

type NavigationLinksTemplateProps = {};

export const NavigationLinksTemplate = memo<NavigationLinksTemplateProps>(() => {
  const { links, deleteLink, setNewLinksOrder } = useNavLinksContext();
  const { linkAction, setAddLinkAction, setOffLinkAction } = useLinkAction();

  return (
    <div className="flex h-full min-h-[560px] w-full flex-col items-center justify-start border-[1px] border-dotted border-third-border-purple p-6">
      <div className="flex h-full w-full flex-col items-center justify-center gap-l">
        <LinksMenu
          links={links}
          deleteLink={deleteLink}
          setAddLinkAction={setAddLinkAction}
          setNewLinksOrder={setNewLinksOrder}
        />
        {linkAction === 'ADD' && <NavigationForm setOffLinkAction={setOffLinkAction} />}
      </div>
    </div>
  );
});
