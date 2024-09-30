import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import sectionStartConversation from '@/app/api/strapi/sectionStartConversation/route';
import getGlobalSettings from '@/app/api/strapi/globalSettings/route';
import ModalComponent from '@/app/components/Modal';
import ContactForm from '@/app/components/ContactForm';
import { Suspense } from 'react';

const PageTemplate = async ({ children }) => {
  const sectionFormData = await sectionStartConversation();
  const globalSettings = await getGlobalSettings();

  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <ModalComponent>
          <ContactForm
            isFormModal
            sectionFormData={sectionFormData}
            globalSettings={globalSettings}
          />
        </ModalComponent>
      </Suspense>
      {children}
      <Footer />
    </>
  );
};

export default PageTemplate;
