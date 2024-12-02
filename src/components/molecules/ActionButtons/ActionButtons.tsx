import { memo } from 'react';
import { Button } from '../../atoms/Button/Button';

type ActionButtonsProps = {
  firstTitle: string;
  secondTitle: string;
  threeTitle: string;
};

export const ActionButtons = memo<ActionButtonsProps>(({ firstTitle, secondTitle, threeTitle }) => {
  return (
    <div className="flex items-center justify-center">
      <Button type="secondary" title={firstTitle} className="rounded-r-none" />
      <Button
        type="secondary"
        title={secondTitle}
        className="rounded-l-none rounded-r-none border-l-0 border-r-0"
      />
      <Button
        type="primary"
        title={threeTitle}
        className="text-secondary-dark border-secondary-border-gray rounded-l-none bg-white"
      />
    </div>
  );
});
