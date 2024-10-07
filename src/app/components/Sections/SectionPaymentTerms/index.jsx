import SliderPaymentTerms from '@/app/components/Sliders/SliderPaymentTerms';
import styles from './styles.module.scss';
import Image from 'next/image';
import Button from '@/app/components/Button';
import dollarsSVG from '@/app/assets/icons/dollars.svg';
import fetchWrapper from '@/app/utils/fetchWrapper';
import { ANCHORS } from '@/app/core/constants/anchor';

export default async function SectionPaymentTerms() {
  const data = await fetchWrapper('/api/section-payment-terms?populate=deep');

  const { title, items, contactBtn } = data.data.attributes;

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

        <Button
          size="lg"
          name={contactBtn.name}
          url={ANCHORS.CONTACT_FORM.ANCHOR}
        />
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
