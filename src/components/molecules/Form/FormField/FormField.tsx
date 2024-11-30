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
    <label htmlFor={name} className="text-secondary-text text-sm font-medium">
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      {...register(name, { valueAsNumber })}
      className="border-primary mt-2 h-10 w-full rounded-md border-[1px] px-3 py-4"
    />
    {error && <span className="error-message">{error.message}</span>}
  </div>
);

export default FormField;
