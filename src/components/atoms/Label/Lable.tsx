import { memo } from 'react';

type LabelProps = {
  name: string;
  label: string;
};

export const Label = memo<LabelProps>(({ name, label }) => {
  return (
    <label htmlFor={name} className="text-base font-medium text-secondary-dark">
      {label}
    </label>
  );
});
