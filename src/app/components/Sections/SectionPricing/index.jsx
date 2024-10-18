import Markdown from '@/app/components/Markdown';
import clsx from 'clsx';
import { routes } from '@/config/routes';
import { ANCHORS } from '@/app/core/constants/anchor';
import SliderPricing from '@/app/components/Sliders/SliderPricing';
import OpenModalFormButton from '@/app/components/OpenModalFormButton';
import Image from 'next/image';
import moneyImg from '@/app/assets/icons/money.png';
import Button from '../../Button';
import styles from './styles.module.scss';

export default async function SectionPricing(props) {
  const { title, feeSection, splitRecruitment, subscriptionModel } = props;

  const cards = [
    {
      data: feeSection,
      button: <OpenModalFormButton name={feeSection.btnName} />,
    },
    {
      data: splitRecruitment,
      button: (
        <Button
          theme="text"
          withIcon
          iconRight
          url={routes.splitRecruitment()}
          name={splitRecruitment.btnName}
        />
      ),
    },
    {
      data: subscriptionModel,
      button: (
        <Button
          theme="text"
          withIcon
          iconRight
          url={ANCHORS.CONTACT_FORM.ANCHOR}
          name={subscriptionModel.btnName}
        />
      ),
    },
  ];

  const Grid = () => (
    <div className={styles.sectionPricingGrid}>
      {cards.map(({ data, button }, idx) => (
        <div
          className={clsx(styles.cardPricing, idx === 0 && styles.specialCard)}
          key={idx}
        >
          <div>
            <h5>{data.title}</h5>
            <Markdown>{data.description}</Markdown>
          </div>

          {button}

          {idx === 0 && <Image src={moneyImg} alt="Money bag icon" fill />}
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
        data={cards}
        altComponent={<Grid />}
        className={clsx(styles.cardPricing, styles.specialCard)}
      />
    </section>
  );
}
