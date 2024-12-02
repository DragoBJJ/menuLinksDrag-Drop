import { Dispatch, memo, SetStateAction } from 'react';
import AddIcon from '../../../../public/images/add.svg';
import { wrapper } from '../../../styles/style';
import { Button } from '../../atoms/Button/Button';
import { Description } from '../../atoms/Description/Description';
import { Header } from '../../atoms/Header/Header';

type MenuProps = {
  setShowForm: Dispatch<SetStateAction<boolean>>;
};

export const Menu = memo<MenuProps>(({ setShowForm }) => {
  return (
    <div className={`${wrapper} border-secondary bg-secondary p-6`}>
      <div className="flex flex-col items-center justify-center gap-xs">
        <Header title="Menu jest puste" />
        <Description text="W tym menu nie ma jeszcze żadnych linków." />
      </div>
      <Button
        title="Dodaj pozycję menu"
        icon={<AddIcon className="cursor-pointer" />}
        onClick={() => setShowForm((prev) => !prev)}
        className="mt-6 gap-[4px]"
      />
    </div>
  );
});
