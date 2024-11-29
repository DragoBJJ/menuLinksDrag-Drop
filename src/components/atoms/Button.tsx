import { memo } from 'react';

type ButtonProps = {
  title: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export const Button = memo<ButtonProps>(({ title, onClick, className }) => {
  return (
    <button
      className={`radius-4 h-[40px] w-[193px] items-center justify-center rounded-md bg-primary-button px-[14px] py-[10px] ${className}`}
    >
      <p className="font-inter text-sm font-semibold text-white">{title}</p>
    </button>
  );
});
