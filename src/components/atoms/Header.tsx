import { memo } from 'react';

type HeaderProps = {
  title: string;
  place?: 'left' | 'center' | 'right';
};

export const Header = memo<HeaderProps>(({ title, place = 'center' }) => {
  return (
    <div
      className={`text-primary-text items-center justify-center text-pretty font-inter text-base font-semibold text-${place}`}
    >
      <h2>{title}</h2>
    </div>
  );
});
