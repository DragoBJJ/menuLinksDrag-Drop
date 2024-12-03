'use client';

import { memo, useState } from 'react';
import { useLinkAction } from '../../hooks/useFormAction';
import { Link } from '../../types/data';
import { Links } from '../molecules/Links/Links';
import { LinksMenu } from '../molecules/LinksMenu/LinksMenu';
import { LinksWrapper } from '../molecules/LinksWrapper/LinksWrapper';
import { NavigationForm } from '../organisms/NavigationForm/NavigationForm';

type NavigationLinksTemplateProps = {};

export const NavigationLinksTemplate = memo<NavigationLinksTemplateProps>(() => {
  const [links, setLinks] = useState<Link[]>([]);

  const { linkAction, setAddLinkAction, setOffLinkAction } = useLinkAction();

  console.log('linkAction', linkAction);

  return (
    <div className="border-third-border-purple flex h-full min-h-[560px] w-full flex-col items-center justify-start border-[1px] border-dotted p-6">
      <div className="flex h-full w-full flex-col items-center justify-center gap-l">
        {links.length ? (
          <LinksWrapper setAddLinkAction={setAddLinkAction}>
            <Links links={links} setLinks={setLinks} />
          </LinksWrapper>
        ) : (
          <LinksMenu setAddLinkAction={setAddLinkAction} />
        )}
        {linkAction === 'ADD' && (
          <NavigationForm setLinks={setLinks} setOffLinkAction={setOffLinkAction} />
        )}
      </div>
    </div>
  );
});
