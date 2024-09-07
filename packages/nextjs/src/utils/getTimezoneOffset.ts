export const getTimezoneOffset = () => {
  const now = new Date();

  const offsetInMinutes = now.getTimezoneOffset();

  const offsetInHours = offsetInMinutes / 60;

  return `UTC ${offsetInHours}`;
};
