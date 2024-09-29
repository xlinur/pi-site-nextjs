import Head from 'next/head';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

const PageTemplate = ({ children }) => {
  return (
    <>
      <Head>
        <title>Personalinvest</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default PageTemplate;
