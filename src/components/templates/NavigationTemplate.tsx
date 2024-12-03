'use client';

import { memo, useState } from 'react';
import MenuItemIcon from '../../../public/images/menuItem.svg';
import { Link } from '../../types/data';
import { MenuLinks } from '../MenuLinks/MenuLinks';
import { ActionButtons } from '../molecules/ActionButtons/ActionButtons';
import { LinkItem } from '../molecules/LinkItem/Linktem';
import { Menu } from '../molecules/Menu/Menu';
import { NavigationForm } from '../organisms/NavigationForm/NavigationForm';

type NavigationTemplateProps = {};

export const NavigationTemplate = memo<NavigationTemplateProps>(() => {
  const [links, setLinks] = useState<Link[]>([]);
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-6">
      <div className="flex h-full w-full flex-col items-center justify-center gap-l">
        {!links.length && <Menu setShowForm={setShowForm} />}
        {showForm && <NavigationForm setLinks={setLinks} setShowForm={setShowForm} />}
        {links.length && (
          <MenuLinks setLinks={setLinks} setShowForm={setShowForm}>
            {links.map(({ title, url }, index) => (
              <LinkItem
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
                showForm={showForm}
                form={
                  showForm ? (
                    <NavigationForm setLinks={setLinks} setShowForm={setShowForm} />
                  ) : (
                    <></>
                  )
                }
              />
            ))}
          </MenuLinks>
        )}
      </div>
    </div>
  );
});
