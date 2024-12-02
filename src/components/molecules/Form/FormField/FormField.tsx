import { FormFieldProps } from '../type';

const FormField = <T extends Record<string, any>>({
  type,
  placeholder,
  name,
  label,
  register,
  error,
  valueAsNumber,
}: FormFieldProps<T>) => (
  <div className="flex w-[1064px] flex-col items-start justify-start">
    <label htmlFor={name} className="text-base font-medium text-secondary-text">
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      {...register(name, { valueAsNumber })}
      className="mt-2 h-10 w-full rounded-md border-[1px] border-primary px-3 py-4 text-base text-tertiary"
    />
    {error && <span className="error-message">{error.message}</span>}
  </div>
);

export default FormField;
