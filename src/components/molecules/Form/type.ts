import { FieldError, FieldValues, Path, UseFormRegister } from 'react-hook-form';
import { z, ZodType } from 'zod';
import { NavDataForm } from './data';

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

export const NavFormShema: ZodType<NavDataForm> = z.object({
  title: z.string().min(3, { message: 'The name must have at least 3 characters' }),
  url: z.string().url().optional(),
});
