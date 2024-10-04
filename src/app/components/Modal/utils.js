export const changeBodyOverflow = (overflow) => {
  document.querySelector('body').style.overflow = overflow;
};

export const openModalById = (id) => {
  document.querySelector(`dialog#${id}`).showModal();
  changeBodyOverflow('hidden');
};
