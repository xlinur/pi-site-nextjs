import sectionStartConversation from '@/app/api/strapi/sectionStartConversation/route';
import getGlobalSettings from '@/app/api/strapi/globalSettings/route';
import Content from './Content';

export const ContactForm = async ({ isFormModal }) => {
  const sectionFormData = await sectionStartConversation();
  const globalSettings = await getGlobalSettings();

  return (
    <Content
      isFormModal={isFormModal}
      sectionFormData={sectionFormData}
      globalSettings={globalSettings}
    />
  );
};

export default ContactForm;
