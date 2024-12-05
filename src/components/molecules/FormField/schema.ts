import { z, ZodType } from 'zod';
import { NavDataForm } from './data';

export const NavFormShema: ZodType<NavDataForm> = z.object({
  title: z.string().min(3, { message: 'The name must have at least 3 characters' }),
  url: z.string().url().or(z.literal('')),
});
