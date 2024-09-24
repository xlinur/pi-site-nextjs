import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import Button from '@/app/components/Button';
import dollarsSVG from '@/app/assets/icons/dollars.svg';

export default function SectionPaymentTerms({ data }) {
  return (
    <section className={styles.paymentTermsSection}>
      <header>
        <h2>{data.title}</h2>
      </header>

      <div className={styles.paymentTermsSectionGrid}>
        {data.items.map((item, idx) => (
          <div className={styles.cardTerms} key={idx}>
            <h5>{item.title}</h5>
            <p>{item.description}</p>
          </div>
        ))}
        <div className={styles.cardContact}>
          <Image src={dollarsSVG} alt="Icon dollars" width={148} height={148} />

          <Button size="lg">{data.contactBtn}</Button>
        </div>
      </div>
    </section>
  );
}
