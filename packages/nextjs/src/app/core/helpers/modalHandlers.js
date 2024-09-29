export const handleOpenModal = () => {
  document.querySelector('dialog#layoutModal').showModal();
  document.querySelector('body').style.overflow = 'hidden';
};
