import SliderPaymentTerms from '@/app/components/Sliders/SliderPaymentTerms';
import styles from './styles.module.scss';
import Image from 'next/image';
import Button from '@/app/components/Button';
import dollarsSVG from '@/app/assets/icons/dollars.svg';

import sectionPaymentTerms from '@/app/api/strapi/sectionPaymentTerms/route';

export default async function SectionPaymentTerms() {
  const { title, items, contactBtn } = await sectionPaymentTerms();

  const altComponent = () => (
    <div className={styles.paymentTermsSectionGrid}>
      {items.map((item, idx) => (
        <div className={styles.cardTerms} key={idx}>
          <h5>{item.title}</h5>
          <p>{item.description}</p>
        </div>
      ))}
      <div className={styles.cardContact}>
        <Image src={dollarsSVG} alt="Icon dollars" width={148} height={148} />

        <Button size="lg" name={contactBtn.name} />
      </div>
    </div>
  );

  return (
    <section className={styles.paymentTermsSection}>
      <header>
        <h2>{title}</h2>
      </header>

      <div>
        <SliderPaymentTerms
          data={items}
          altComponent={altComponent()}
          contactBtn={contactBtn}
        />
      </div>
    </section>
  );
}
