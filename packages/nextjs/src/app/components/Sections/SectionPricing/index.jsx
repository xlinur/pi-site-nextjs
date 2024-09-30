import Markdown from 'react-markdown';
import styles from './styles.module.scss';
import SliderPricing from '@/app/components/Sliders/SliderPricing';
import clsx from 'clsx';
import Button from '../../Button';
import { routes } from '@/config/routes';
import { ANCHORS } from '@/app/core/constants/anchor';

export default async function SectionPricing(props) {
  const { title, feeSection, splitRecruitment, subscriptionModel } = props;

  const btnTextConfig = (idx) => {
    switch (idx) {
      case 0:
        return {
          openModal: true,
        };

      case 1:
        return {
          theme: 'text',
          withIcon: true,
          iconRight: true,
          url: routes.splitRecruitment(),
        };

      case 2:
        return {
          theme: 'text',
          withIcon: true,
          iconRight: true,
          url: ANCHORS.CONTACT_FORM.ANCHOR,
        };

      default:
        return {
          openModal: true,
        };
    }
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
