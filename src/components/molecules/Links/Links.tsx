'use client';
import { Dispatch, memo, SetStateAction } from 'react';
import MenuItemIcon from '../../../../public/images/menuItem.svg';
import { Link } from '../../../types/data';
import { LinkItem } from '../LinkItem/Linktem';

type LinksProps = {
  links: Link[];
  setLinks: Dispatch<SetStateAction<Link[]>>;
};

export const Links = memo<LinksProps>(({ links, setLinks }) => {
  return links.map((link, index) => (
    <LinkItem
      key={`${link.url}-${index}`}
      icon={<MenuItemIcon className="mr-4 flex" />}
      setLinks={setLinks}
      {...link}
    />
  ));
});
