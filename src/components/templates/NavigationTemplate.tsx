'use client';

import { memo, useState } from 'react';
import MenuItemIcon from '../../../public/images/menuItem.svg';
import { Link } from '../../types/data';
import { LinkItem } from '../molecules/LinkItem/Linktem';
import { LinksWrapper } from '../molecules/linksWrapper/LinksWrapper';
import { Menu } from '../molecules/Menu/Menu';
import { NavigationForm } from '../organisms/NavigationForm/NavigationForm';

type NavigationTemplateProps = {};

export const NavigationTemplate = memo<NavigationTemplateProps>(() => {
  const [links, setLinks] = useState<Link[]>([]);
  const [showForm, setShowForm] = useState(false);

  console.log('links', links);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-6">
      <div className="flex h-full w-full flex-col items-center justify-center gap-l">
        {links.length ? (
          <LinksWrapper setLinks={setLinks} setShowForm={setShowForm}>
            {links.map((link, index) => (
              <LinkItem
                key={`${link.url}-${index}`}
                icon={<MenuItemIcon className="mr-4 flex" />}
                setLinks={setLinks}
                {...link}
              />
            ))}
          </LinksWrapper>
        ) : (
          <>
            <Menu setShowForm={setShowForm} />
          </>
        )}
        {showForm && <NavigationForm setLinks={setLinks} setShowForm={setShowForm} />}
      </div>
    </div>
  );
});
