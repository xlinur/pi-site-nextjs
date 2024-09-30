import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import sectionStartConversation from '@/app/api/strapi/sectionStartConversation/route';
import getGlobalSettings from '@/app/api/strapi/globalSettings/route';
import getGlobalDictionary from '@/app/api/strapi/globalDictionary/route';
import ModalComponent from '@/app/components/Modal';
import ContactForm from '@/app/components/ContactForm';
import GdprMessage from '@/app/components/GdprMessage';

import { Suspense } from 'react';

const PageTemplate = async ({ children }) => {
  const sectionFormData = await sectionStartConversation();
  const globalSettings = await getGlobalSettings();
  const globalDictionary = await getGlobalDictionary();

  return (
    <>
      <Header />
      {children}
      <Footer />

      {/* MODAL */}
      <Suspense fallback={null}>
        <ModalComponent>
          <ContactForm
            isFormModal
            sectionFormData={sectionFormData}
            globalSettings={globalSettings}
          />
        </ModalComponent>
      </Suspense>

      {/* GDPR MESSAGE */}
      <Suspense fallback={null}>
        <GdprMessage {...globalDictionary} />
      </Suspense>
    </>
  );
};

export default PageTemplate;
