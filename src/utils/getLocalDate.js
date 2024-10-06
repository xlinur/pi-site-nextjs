const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

export const getLocalDate = (date, locale) => {
  const event = new Date(date);

  event.toLocaleDateString(locale, options);
};
