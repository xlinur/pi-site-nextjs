import ContactForm from '@/app/components/ContactForm';
import SectionContactUs from '@/app/components/Sections/SectionContactUs';

import pageContactUs from '@/app/api/strapi/pageContactUs/route';

import styles from './styles.module.scss';

export default async function PageContactUs() {
  const { title } = await pageContactUs();

  return (
    <main className={styles.pageContactUs}>
      <div className="container">
        <h1 className="h2">{title}</h1>

        <section className={styles.sectionForm}>
          <ContactForm />
        </section>

        <div className={styles.contactsSocialWrapper}>
          <SectionContactUs withAdditionalInfo={true} />
        </div>
      </div>
    </main>
  );
}
