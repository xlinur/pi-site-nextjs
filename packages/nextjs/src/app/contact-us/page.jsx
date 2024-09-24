import ContactForm from '@/app/components/ContactForm';
import SectionContactUs from '@/app/components/Sections/SectionContactUs';

import styles from './styles.module.scss';

export default async function PageContactUs() {
  return (
    <main className={styles.pageContactUs}>
      <div className="container">
        <h1 className="h2">Contact</h1>

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
