import { forwardRef, JSX, PropsWithoutRef } from 'react';

interface FormInputProps extends PropsWithoutRef<JSX.IntrinsicElements['input']> {}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ placeholder, type, defaultValue, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className="mt-2 h-10 w-full rounded-md border-[1px] border-primary px-3 py-4 text-base text-tertiary outline-none"
        {...props}
      />
    );
  },
);
