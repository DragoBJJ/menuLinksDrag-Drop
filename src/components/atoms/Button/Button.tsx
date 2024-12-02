import { memo } from 'react';
import { buttonStyle } from './style';

type ButtonProps = {
  type?: 'primary' | 'secondary';
  title: React.ReactNode;
  onClick?: () => void;
  icon?: React.ReactNode;
  className?: string;
};

export const Button = memo<ButtonProps>(({ type = 'primary', title, onClick, icon, className }) => {
  const style = buttonStyle[type];
  return (
    <button
      onClick={onClick}
      className={`radius-4 flex h-[40px] items-center justify-center rounded-md border-[1px] px-[14px] py-[10px] text-center font-inter text-sm font-semibold ${style} ${className}`}
    >
      {icon}
      {title}
    </button>
  );
});
