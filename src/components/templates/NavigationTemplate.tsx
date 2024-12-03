'use client';

import { memo, useState } from 'react';
import MenuItemIcon from '../../../public/images/menuItem.svg';
import { Link } from '../../types/data';
import { MenuLinks } from '../MenuLinks/MenuLinks';
import { LinkItem } from '../molecules/LinkItem/Linktem';
import { Menu } from '../molecules/Menu/Menu';
import { NavigationForm } from '../organisms/NavigationForm/NavigationForm';

type NavigationTemplateProps = {};

export const NavigationTemplate = memo<NavigationTemplateProps>(() => {
  const [links, setLinks] = useState<Link[]>([]);

  console.log('links', links);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-6">
      <div className="flex h-full w-full flex-col items-center justify-center gap-l">
        {!links.length && <Menu />}
        {<NavigationForm setLinks={setLinks} />}
        {links.length && (
          <MenuLinks setLinks={setLinks}>
            {links.map(({ title, url }, index) => (
              <LinkItem
                key={`${url}-${index}`}
                icon={<MenuItemIcon className="mr-4 flex" />}
                title={title}
                description={url}
                setLinks={setLinks}
              />
            ))}
          </MenuLinks>
        )}
      </div>
    </div>
  );
});
