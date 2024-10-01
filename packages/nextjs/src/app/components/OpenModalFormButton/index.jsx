'use client';

import Button from '@/app/components/Button';
import { openModalById } from '@/app/components/Modal/utils';
import { CONTACT_FORM_MODAL_ID } from '@/config/contactFormModal';

const OpenModalFormButton = ({ onClick, ...restButtonProps }) => {
  const handleOpenModal = () => {
    openModalById(CONTACT_FORM_MODAL_ID);

    onClick?.();
  };

  return <Button {...restButtonProps} onClick={handleOpenModal} />;
};

export default OpenModalFormButton;
