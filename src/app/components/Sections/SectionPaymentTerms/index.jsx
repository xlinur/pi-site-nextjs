import SliderPaymentTerms from '@/app/components/Sliders/SliderPaymentTerms';
import styles from './styles.module.scss';
import Image from 'next/image';
import Button from '@/app/components/Button';
import Markdown from '@/app/components/Markdown';
import dollarsSVG from '@/app/assets/icons/dollars.svg';
import { ANCHORS } from '@/app/core/constants/anchor';

export default function SectionPaymentTerms({ title, items, contactBtn }) {
  const altComponent = () => (
    <div className={styles.paymentTermsSectionGrid}>
      {items.map((item, idx) => (
        <div className={styles.cardTerms} key={idx}>
          <h5>{item.title}</h5>
          <Markdown>{item.description}</Markdown>
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
