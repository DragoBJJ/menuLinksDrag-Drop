'use client';

import { memo } from 'react';
import MenuItemIcon from '../../../public/images/menuItem.svg';
import { useNavLinksContext } from '../../context/useNavLinksContext';
import { useLinkAction } from '../../hooks/useFormAction';
import { LinkItem } from '../molecules/LinkItem/Linktem';
import { LinksMenu } from '../molecules/LinksMenu/LinksMenu';
import { LinksWrapper } from '../molecules/LinksWrapper/LinksWrapper';
import { NavigationForm } from '../organisms/NavigationForm/NavigationForm';

type NavigationLinksTemplateProps = {};

export const NavigationLinksTemplate = memo<NavigationLinksTemplateProps>(() => {
  const { links, deleteLink } = useNavLinksContext();
  const { linkAction, setAddLinkAction, setEditLinkAction, setOffLinkAction } = useLinkAction();

  return (
    <div className="flex h-full min-h-[560px] w-full flex-col items-center justify-start border-[1px] border-dotted border-third-border-purple p-6">
      <div className="flex h-full w-full flex-col items-center justify-center gap-l">
        {links.length ? (
          <LinksWrapper setAddLinkAction={setAddLinkAction}>
            {links.map((link, index) => (
              <LinkItem
                key={`${link.url}-${index}`}
                icon={<MenuItemIcon className="mr-4 flex" />}
                link={link}
                deleteLink={() => deleteLink(link.id)}
              />
            ))}
          </LinksWrapper>
        ) : (
          <LinksMenu setAddLinkAction={setAddLinkAction} />
        )}
        {linkAction === 'ADD' && <NavigationForm setOffLinkAction={setOffLinkAction} />}
      </div>
    </div>
  );
});
