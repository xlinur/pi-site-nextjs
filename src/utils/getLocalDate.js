const options = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
};

const LOCALES_MAP = {
  eu: 'eu',
  by: 'ru',
};

export const getLocalDate = (date, locale) => {
  const event = new Date(date);

  return event.toLocaleDateString(LOCALES_MAP[locale], options);
};
