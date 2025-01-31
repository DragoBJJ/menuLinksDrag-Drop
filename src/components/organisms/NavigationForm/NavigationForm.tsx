'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { memo } from 'react';
import { useForm } from 'react-hook-form';
import DeleteIcon from '../../../../public/images/delete.svg';
import { useNavLinksContext } from '../../../context/useNavLinksContext';
import { wrapper } from '../../../styles/style';
import { Link } from '../../../types/data';
import { Button } from '../../atoms/Button/Button';
import { NavDataForm } from '../../molecules/FormField/data';
import FormField from '../../molecules/FormField/FormField';
import { NavFormShema } from '../../molecules/FormField/schema';

type NavigationFormProps = {
  setOffLinkAction: () => void;
  link?: Link;
};

export const NavigationForm = memo<NavigationFormProps>(({ setOffLinkAction, link }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<NavDataForm>({
    resolver: zodResolver(NavFormShema),
  });

  const { addNewLink, editLink } = useNavLinksContext();

  const onSubmit = async (data: NavDataForm) => {
    if (isValid) {
      link ? editLink(data, link.id) : addNewLink(data);
      reset();
      setOffLinkAction();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${wrapper} relative w-[1168px] border-primary bg-white p-6`}
    >
      <div onClick={() => setOffLinkAction()}>
        <DeleteIcon className="absolute right-[36.5px] top-[32.5px] cursor-pointer" />
      </div>

      <div className="flex h-full w-full flex-col gap-xs">
        <FormField
          type="text"
          placeholder="np. Aztec runes"
          label="Name"
          name="title"
          defaultValue={link?.title}
          register={register}
          error={errors.title}
        />
        <FormField
          type="text"
          placeholder="Paste or search"
          label="Link"
          name="url"
          defaultValue={link?.url}
          register={register}
          error={errors.url}
        />
        <FormField
          type="number"
          placeholder="Rune"
          label="Rune"
          name="rune"
          defaultValue={String(link?.rune)}
          register={register}
          error={errors.rune}
        />
      </div>

      <div className="mr-auto mt-6 flex items-start justify-center gap-xs">
        <Button
          actionType="button"
          type="secondary"
          title="Cancel"
          onClick={() => setOffLinkAction()}
        />
        <Button
          actionType="submit"
          type="secondary"
          title={link ? 'Edit' : 'Add'}
          className="border-primary-purple text-secondary-purple"
        />
      </div>
    </form>
  );
});
