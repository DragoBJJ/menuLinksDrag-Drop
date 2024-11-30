import { wrapper } from '../../../styles/style';
import { Button } from '../../atoms/Button/Button';
import { Description } from '../../atoms/Description';
import { Header } from '../../atoms/Header';

export const Menu = () => {
  return (
    <div className={`${wrapper} bg-secondary border-secondary p-6`}>
      <div className="flex flex-col items-center justify-center gap-xs">
        <Header title="Menu jest puste" />
        <Description text="W tym menu nie ma jeszcze żadnych linków." />
      </div>
      <Button title="Dodaj pozycję w menu" className="mt-6" />
    </div>
  );
};
