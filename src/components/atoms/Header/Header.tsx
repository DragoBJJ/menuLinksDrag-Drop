import { memo } from 'react';

type HeaderProps = {
  title: string;
  place?: 'left' | 'center' | 'right';
};

export const Header = memo<HeaderProps>(({ title, place = 'center' }) => {
  return (
    <div
      className={`items-center justify-center text-pretty font-inter text-base font-semibold text-primary-text text-${place}`}
    >
      <h2>{title}</h2>
    </div>
  );
});
