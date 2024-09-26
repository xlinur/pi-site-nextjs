import Button from '@/app/components/Button';
import styles from './styles.module.scss';
import Markdown from 'react-markdown';

export default async function SectionPricing(props) {
  const { title, feeSection, splitRecruitment, subscriptionModel } = props;

  const btnTextConfig = (idx) => {
    if (idx !== 0) {
      return {
        theme: 'text',
        withIcon: true,
        iconRight: true,
      };
    }

    return {};
  };

  return (
    <section className={styles.sectionPricing}>
      <header>
        <h3>{title}</h3>
      </header>

      <div className={styles.sectionPricingGrid}>
        {[feeSection, splitRecruitment, subscriptionModel].map((item, idx) => (
          <div className={styles.cardPricing} key={idx}>
            <div>
              <h5>{item.title}</h5>
              <Markdown>{item.description}</Markdown>
            </div>

            <Button {...btnTextConfig(idx)} name={item.btnName} />
          </div>
        ))}
      </div>
    </section>
  );
}
