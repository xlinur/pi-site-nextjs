'use client';

import Content from './Content';

export const ContactForm = ({
  isFormModal,
  sectionFormData,
  globalSettings,
}) => {
  return (
    <Content
      isFormModal={isFormModal}
      sectionFormData={sectionFormData}
      globalSettings={globalSettings}
    />
  );
};

export default ContactForm;
