const options = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
};

export const getLocalDate = (date, locale) => {
  const event = new Date(date);

  return event.toLocaleDateString(locale, options);
};
