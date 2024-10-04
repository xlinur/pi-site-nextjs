'use client';

import Content from './Content';

export const ContactForm = ({ className, sectionFormData, globalSettings }) => {
  return (
    <Content
      className={className}
      sectionFormData={sectionFormData}
      globalSettings={globalSettings}
    />
  );
};

export default ContactForm;
