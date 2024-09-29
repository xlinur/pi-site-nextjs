import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

const PageTemplate = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default PageTemplate;
