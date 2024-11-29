import { memo } from 'react';

type DescriptionProps = {
  text: string;
  place?: 'left' | 'center' | 'right';
};

export const Description = memo<DescriptionProps>(({ text, place = 'center' }) => {
  return (
    <div className={`text-tertiary font-inter text-sm text-text-tertiary text-${place}`}>
      {text}
    </div>
  );
});
