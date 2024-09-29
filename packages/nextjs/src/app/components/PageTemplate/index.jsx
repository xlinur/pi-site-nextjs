import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import ModalComponent from '@/app/components/Modal';
import ContactForm from '@/app/components/ContactForm';

const PageTemplate = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />

      <ModalComponent>
        <ContactForm isFormModal />
      </ModalComponent>
    </>
  );
};

export default PageTemplate;
