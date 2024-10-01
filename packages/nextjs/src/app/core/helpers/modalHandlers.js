export const handleOpenModal = (id) => {
  document.querySelector(`dialog#${id}`).showModal();
  document.querySelector('body').style.overflow = 'hidden';
};
