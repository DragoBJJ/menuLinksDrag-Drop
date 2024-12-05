import { FieldValues } from 'react-hook-form';
import { FormMessage } from '../../atoms/FormMessage/FormMessage';
import { Label } from '../../atoms/Label/Lable';
import { FormFieldProps } from './type';

const FormField = <T extends FieldValues>({
  type,
  placeholder,
  name,
  label,
  register,
  error,
  defaultValue,
  valueAsNumber,
}: FormFieldProps<T>) => (
  <div className="flex w-[1064px] flex-col items-start justify-start">
    <Label name={name} label={label} />
    <input
      type={type}
      defaultValue={defaultValue}
      placeholder={placeholder}
      className="mt-2 h-10 w-full rounded-md border-[1px] border-primary px-3 py-4 text-base text-tertiary outline-none"
      {...register(name, { valueAsNumber })}
    />
    <FormMessage type="error" message={error?.message} />
  </div>
);

export default FormField;
