'use client';

import { memo } from 'react';
import { useForm } from 'react-hook-form';
import DeleteIcon from '../../../../public/images/delete.svg';
import { wrapper } from '../../../styles/style';
import { Button } from '../../atoms/Button/Button';
import { NavDataForm } from '../../molecules/Form/data';
import FormField from '../../molecules/Form/FormField/FormField';

type NavigationFormProps = {};

export const NavigationForm = memo<NavigationFormProps>(() => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<NavDataForm>();

  const onSubmit = async (data: NavDataForm) => {
    console.log('SUCCESS', data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${wrapper} relative w-[1168px] border-primary p-6`}
    >
      <DeleteIcon className="absolute right-[36.5px] top-[32.5px] cursor-pointer" />
      <div className="flex h-full w-full flex-col gap-xs">
        <FormField
          type="text"
          placeholder="np. Promocje"
          label="Nazwa"
          name="company"
          register={register}
          error={errors.company}
        />
        <FormField
          type="text"
          placeholder="Wklej lub wyszukaj"
          label="Link"
          name="link"
          register={register}
          error={errors.link}
        />
      </div>

      <div className="mr-auto flex items-start justify-center gap-xs">
        <Button type="secondary" title="Anuluj" className="border-secondaryButtonGray" />
        <Button type="secondary" title="Dodaj" />
      </div>
    </form>
  );
});
