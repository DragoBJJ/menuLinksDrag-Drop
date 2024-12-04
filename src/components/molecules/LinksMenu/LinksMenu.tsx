import { memo } from 'react';
import AddIcon from '../../../../public/images/add.svg';
import MenuItemIcon from '../../../../public/images/menuItem.svg';
import { wrapper } from '../../../styles/style';
import { Link } from '../../../types/data';
import { Button } from '../../atoms/Button/Button';
import { EmptyMenu } from '../EmptyMenu/EmptyMenu';
import { LinkItem } from '../LinkItem/Linktem';
import { LinksWrapper } from '../LinksWrapper/LinksWrapper';

type MenuProps = {
  setAddLinkAction: () => void;
  deleteLink: (id: Link['id']) => void;
  links: Link[];
};

export const LinksMenu = memo<MenuProps>(({ setAddLinkAction, links, deleteLink }) => {
  const bgColor = links.length ? 'bg-white' : 'bg-secondary';
  return (
    <div className={`${wrapper} border-secondary ${bgColor} p-6`}>
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
        <EmptyMenu
          title="Menu jest puste"
          description="W tym menu nie ma jeszcze żadnych linków."
          actionButton={
            <Button
              title="Dodaj pozycję menu"
              icon={<AddIcon className="cursor-pointer" />}
              onClick={() => setAddLinkAction()}
              className="mt-6 gap-[4px]"
            />
          }
        />
      )}
    </div>
  );
});
