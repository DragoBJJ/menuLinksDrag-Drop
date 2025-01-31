import { z, ZodType } from 'zod';
import { NavDataForm } from './data';

export const NavFormShema: ZodType<NavDataForm> = z.object({
  title: z.string().min(3, { message: 'The name must have at least 3 characters' }),
  url: z.string().url().or(z.literal('')),
  rune: z.coerce
    .number()
    .int({ message: 'Must be an integer' })
    .min(1, { message: 'The value must not be less than 1' })
    .max(9999, { message: 'The maximum value is 9999' }),
});
