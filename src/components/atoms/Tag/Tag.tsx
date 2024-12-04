import { memo } from 'react';
import { tagStyle } from './style';

type TagProps = {
  type: 'primary' | 'secondary';
  title: string;
};

export const Tag = memo<TagProps>(({ title, type }) => {
  const style = tagStyle[type];
  return (
    <div className={`flex h-5 items-center justify-center rounded-md text-sm opacity-90 ${style}`}>
      <p>{title}</p>
    </div>
  );
});
