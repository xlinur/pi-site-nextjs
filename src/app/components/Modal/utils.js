export const changeBodyOverflow = (overflow) => {
  document.querySelector('body').style.overflow = overflow;
};

export const openModalById = (id) => {
  const dialog = document.querySelector(`dialog#${id}`);

  if (dialog) {
    dialog.showModal();
    changeBodyOverflow('hidden');
  } else {
    console.log(`modal with id "${id}" not found`);
  }
};
