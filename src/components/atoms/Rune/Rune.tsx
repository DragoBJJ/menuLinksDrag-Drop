import { memo } from 'react';

type RuneProps = {
  runeImg: string;
};

export const Rune = memo<RuneProps>(({ runeImg }) => {
  return (
    <div className="flex h-[60px] w-[60px]">
      <div className="h-full w-full" dangerouslySetInnerHTML={{ __html: runeImg }} />
    </div>
  );
});
