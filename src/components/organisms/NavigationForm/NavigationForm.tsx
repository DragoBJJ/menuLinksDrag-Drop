'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Dispatch, memo, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import DeleteIcon from '../../../../public/images/delete.svg';
import { wrapper } from '../../../styles/style';
import { Link } from '../../../types/data';
import { Button } from '../../atoms/Button/Button';
import { NavDataForm } from '../../molecules/Form/data';
import FormField from '../../molecules/Form/FormField/FormField';
import { NavFormShema } from '../../molecules/Form/type';

type NavigationFormProps = {
  setLinks: Dispatch<SetStateAction<Link[]>>;
  setShowForm: Dispatch<SetStateAction<boolean>>;
};

export const NavigationForm = memo<NavigationFormProps>(({ setLinks, setShowForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
  } = useForm<NavDataForm>({
    resolver: zodResolver(NavFormShema),
  });

  console.log('errors', errors);

  const clearInputs = () => {};

  const onSubmit = async (data: NavDataForm) => {
    if (isValid) {
      setLinks((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          title: data.title,
          url: data.url || '',
        },
      ]);
    }
    setShowForm(false);
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
          name="title"
          register={register}
          error={errors.title}
        />
        <FormField
          type="text"
          placeholder="Wklej lub wyszukaj"
          label="Link"
          name="url"
          register={register}
          error={errors.url}
        />
      </div>

      <div className="mr-auto mt-6 flex items-start justify-center gap-xs">
        <Button type="secondary" title="Anuluj" />
        <Button
          type="secondary"
          title="Dodaj"
          className="border-secondary-border-purple text-secondary-purple"
        />
      </div>
    </form>
  );
});
