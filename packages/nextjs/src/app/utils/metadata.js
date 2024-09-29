export const createMetadataFromSeo = (seo) => {
  if (!seo)
    return {
      title: 'PersonalInvest',
    };

  const { title, description } = seo;

  return {
    title,
    description,
  };
};
