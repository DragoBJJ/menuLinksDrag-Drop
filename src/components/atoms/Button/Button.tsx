import { memo } from 'react';
import { buttonStyle } from './style';

type ButtonProps = {
  actionType?: 'submit' | 'button' | 'reset';
  type?: 'primary' | 'secondary';
  title: React.ReactNode;
  onClick?: () => void;
  icon?: React.ReactNode;
  className?: string;
};

export const Button = memo<ButtonProps>(
  ({ type = 'primary', actionType = 'submit', title, onClick, icon, className }) => {
    const style = buttonStyle[type];
    return (
      <button
        type={actionType}
        onClick={onClick}
        className={`radius-4 flex h-10 items-center justify-center rounded-md border-[1px] px-3.5 py-2.5 text-center font-inter text-sm font-semibold ${style} ${className}`}
      >
        {icon}
        {title}
      </button>
    );
  },
);
