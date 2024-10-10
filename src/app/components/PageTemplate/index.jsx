import { Suspense } from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Modal from '@/app/components/Modal';
import ContactForm from '@/app/components/ContactForm';
import GdprMessage from '@/app/components/GdprMessage';
import { CONTACT_FORM_MODAL_ID } from '@/config/contactFormModal';
import fetchWrapper from '@/app/utils/fetchWrapper';
import SuccessModal from '@/app/components/SuccessModal';
import { SUCCESS_MESSAGE_MODAL_ID } from '@/config/successMessageModal';
import styles from './styles.module.scss';

const PageTemplate = async ({ children }) => {
  const [startConversationData, dictionaryData, settingsData] =
    await Promise.all([
      fetchWrapper('/api/section-start-conversation-form?populate=deep'),
      fetchWrapper('/api/global-dictionary?populate=deep'),
      fetchWrapper('/api/global?populate=deep'),
    ]);

  const { successMessage, ...sectionFormData } =
    startConversationData.data.attributes;

  return (
    <>
      <Header />
      {children}
      <Footer />

      {/* MODAL */}
      <Suspense fallback={null}>
        <Modal id={CONTACT_FORM_MODAL_ID}>
          <ContactForm
            id={CONTACT_FORM_MODAL_ID}
            className={styles.modalForm}
            sectionFormData={sectionFormData}
            globalSettings={settingsData.data.attributes}
          />
        </Modal>
      </Suspense>

      {/* GDPR MESSAGE */}
      <Suspense fallback={null}>
        <GdprMessage globalDictionary={dictionaryData.data.attributes} />
      </Suspense>

      <Suspense fallback={null}>
        <SuccessModal
          id={SUCCESS_MESSAGE_MODAL_ID}
          title={successMessage?.title}
          message={successMessage?.message}
        />
      </Suspense>
    </>
  );
};

export default PageTemplate;
