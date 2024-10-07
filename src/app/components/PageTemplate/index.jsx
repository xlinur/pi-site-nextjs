import { Suspense } from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Modal from '@/app/components/Modal';
import ContactForm from '@/app/components/ContactForm';
import SuccessMessage from '@/app/components/SuccessMessage';
import GdprMessage from '@/app/components/GdprMessage';
import { CONTACT_FORM_MODAL_ID } from '@/config/contactFormModal';
import { SUCCESS_MESSAGE_MODAL_ID } from '@/config/successMessageModal';
import fetchWrapper from '@/app/utils/fetchWrapper';
import styles from './styles.module.scss';

const PageTemplate = async ({ children }) => {
  const [startConversationData, dictionaryData, settingsData] =
    await Promise.all([
      fetchWrapper('/api/section-start-conversation-form?populate=deep'),
      fetchWrapper('/api/global-dictionary?populate=deep'),
      fetchWrapper('/api/global?populate=deep'),
    ]);

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
            sectionFormData={startConversationData.data.attributes}
            globalSettings={settingsData.data.attributes}
          />
        </Modal>
      </Suspense>

      {/* GDPR MESSAGE */}
      <Suspense fallback={null}>
        <GdprMessage globalDictionary={dictionaryData.data.attributes} />
      </Suspense>

      {/* SUCCESS MESSAGE */}
      <Suspense fallback={null}>
        <Modal id={SUCCESS_MESSAGE_MODAL_ID}>
          <SuccessMessage
            data={startConversationData.data.attributes.successMessage}
          />
        </Modal>
      </Suspense>
    </>
  );
};

export default PageTemplate;
