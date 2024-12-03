'use client';

import { memo, useState } from 'react';
import { Link } from '../../types/data';
import { Links } from '../molecules/Links/Links';
import { LinksMenu } from '../molecules/LinksMenu/LinksMenu';
import { LinksWrapper } from '../molecules/LinksWrapper/LinksWrapper';
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
            <Links links={links} setLinks={setLinks} />
          </LinksWrapper>
        ) : (
          <>
            <LinksMenu setShowForm={setShowForm} />
          </>
        )}
        {showForm && <NavigationForm setLinks={setLinks} setShowForm={setShowForm} />}
      </div>
    </div>
  );
});
