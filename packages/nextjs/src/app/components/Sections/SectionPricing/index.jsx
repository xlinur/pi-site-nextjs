import Markdown from 'react-markdown';
import styles from './styles.module.scss';
import SliderPricing from '@/app/components/Sliders/SliderPricing';
import clsx from 'clsx';
import Button from '../../Button';

export default async function SectionPricing(props) {
  const { title, feeSection, splitRecruitment, subscriptionModel } = props;

  const btnTextConfig = (idx) => {
    if (idx !== 0) {
      return {
        theme: 'text',
        withIcon: true,
        iconRight: true,
      };
    } else {
      return {
        openModal: true,
      }
    }

    return {};
  };

  const Grid = () => (
    <div className={styles.sectionPricingGrid}>
      {[feeSection, splitRecruitment, subscriptionModel].map((item, idx) => (
        <div
          className={clsx(styles.cardPricing, idx === 0 && styles.specialCard)}
          key={idx}
        >
          <div>
            <h5>{item.title}</h5>
            <Markdown>{item.description}</Markdown>
          </div>

          <Button {...btnTextConfig(idx)} name={item.btnName} />
        </div>
      ))}
    </div>
  );

  return (
    <section className={styles.sectionPricing}>
      <header>
        <h3>{title}</h3>
      </header>

      <SliderPricing
        data={[feeSection, splitRecruitment, subscriptionModel]}
        altComponent={<Grid />}
      />
    </section>
  );
}
