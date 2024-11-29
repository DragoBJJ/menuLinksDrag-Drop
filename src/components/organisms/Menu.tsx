import { Button } from '../atoms/Button';
import { Description } from '../atoms/Description';
import { Header } from '../atoms/Header';

export const Menu = () => {
  return (
    <div className="border-secondary flex h-[160px] w-full max-w-[1160px] flex-col items-center justify-center rounded-md border-[1px] px-[16px] py-[24px]">
      <div className="gap-xs flex flex-col items-center justify-center">
        <Header title="Menu jest puste" />
        <Description text="W tym menu nie ma jeszcze żadnych linków." />
      </div>
      <Button title="Dodaj pozycję w menu" className="mt-6" />
    </div>
  );
};
