import { FieldError, FieldValues, Path, UseFormRegister } from 'react-hook-form';

export type ValidFieldNames = 'company' | 'link';

type FormFieldType = 'text' | 'email' | 'password' | 'number';

export type FormFieldProps<T extends FieldValues> = {
  type: FormFieldType;
  placeholder: string;
  name: Path<T>;
  label: string;
  register: UseFormRegister<T>;
  error?: FieldError;
  valueAsNumber?: boolean;
};
