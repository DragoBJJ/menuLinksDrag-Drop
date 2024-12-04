import { memo } from 'react';

type TagProps = {
  title: string;
};

export const Tag = memo<TagProps>(({ title }) => {
  return (
    <div className="bg-primary-purple flex h-5 w-[72px] items-center justify-center rounded-md text-sm text-secondary-purple opacity-70">
      <p>{title}</p>
    </div>
  );
});
