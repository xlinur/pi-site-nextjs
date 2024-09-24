import Button from '@/app/components/Button';
import SliderInfinityLogos from '@/app/components/Sliders/SliderInfinityLogos';

const images = require.context(
  '@/app/assets/images/partners',
  false,
  /\.(png|jpe?g|svg)$/,
);
const imagePaths = images.keys().map((path) => ({
  name: path.replace('./', ''),
  src: images(path).default,
}));

import styles from './styles.module.scss';

const CompaniesLogo = () => {
  const mok = {
    title: '9 of 10 companies come to us and stay',
    logos: imagePaths,
    addLogoBtn: 'Add your logo',
  };

  return (
    <section className={styles.sectionCompanies}>
      <h3>{mok.title}</h3>

      <div className={styles.infinitySliderWrapper}>
        <SliderInfinityLogos data={mok.logos} />
      </div>

      <Button theme="primary">{mok.addLogoBtn}</Button>
    </section>
  );
};

export default CompaniesLogo;
