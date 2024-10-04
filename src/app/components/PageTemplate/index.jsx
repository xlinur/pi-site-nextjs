import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import sectionStartConversation from '@/app/api/strapi/sectionStartConversation/route';
import getGlobalSettings from '@/app/api/strapi/globalSettings/route';
import getGlobalDictionary from '@/app/api/strapi/globalDictionary/route';
import Modal from '@/app/components/Modal';
import ContactForm from '@/app/components/ContactForm';
import GdprMessage from '@/app/components/GdprMessage';
import { CONTACT_FORM_MODAL_ID } from '@/config/contactFormModal';

import { Suspense } from 'react';
import styles from './styles.module.scss';

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
        <Modal id={CONTACT_FORM_MODAL_ID}>
          <ContactForm
            className={styles.modalForm}
            sectionFormData={sectionFormData}
            globalSettings={globalSettings}
          />
        </Modal>
      </Suspense>

      {/* GDPR MESSAGE */}
      <Suspense fallback={null}>
        <GdprMessage globalDictionary={globalDictionary} />
      </Suspense>
    </>
  );
};

export default PageTemplate;
