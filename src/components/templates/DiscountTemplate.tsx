'use client';

import { memo, useState } from 'react';
import MenuItemIcon from '../../../public/images/menuItem.svg';
import { Link } from '../../types/data';
import { MenuLinks } from '../MenuLinks/MenuLinks';
import { ActionButtons } from '../molecules/ActionButtons/ActionButtons';
import { Menu } from '../molecules/Menu/Menu';
import { MenuItem } from '../molecules/MenuItem/MenuItem';
import { NavigationForm } from '../organisms/NavigationForm/NavigationForm';

type DiscountTemplateProps = {};

export const DiscountTemplate = memo<DiscountTemplateProps>(() => {
  const [links, setLinks] = useState<Link[]>([]);
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-6">
      <div className="flex h-full w-full flex-col items-center justify-center gap-l">
        {!links.length && <Menu setShowForm={setShowForm} />}
        {showForm && <NavigationForm setLinks={setLinks} />}
        {links.length && (
          <MenuLinks setLinks={setLinks}>
            {links.map(({ title, url }, index) => (
              <MenuItem
                key={`${url}-${index}`}
                icon={<MenuItemIcon className="mr-4 flex" />}
                title={title}
                description={url}
                renderActionButtons={
                  <ActionButtons
                    firstTitle="Usuń"
                    secondTitle="Edytuj"
                    threeTitle="Dodaj pozycję menu"
                  />
                }
              />
            ))}
          </MenuLinks>
        )}
      </div>
    </div>
  );
});
