import Button from '@/app/components/Button';
import SliderInfinityLogos from '@/app/components/Sliders/SliderInfinityLogos';

// const images = require.context(
//   '@/app/assets/images/partners',
//   false,
//   /\.(png|jpe?g|svg)$/,
// );
// const imagePaths = images.keys().map((path) => ({
//   name: path.replace('./', ''),
//   src: images(path).default,
// }));

import companiesLogoSection from '@/app/api/strapi/companiesLogoSection/route';
import styles from './styles.module.scss';

export default async function CompaniesLogo() {
  const { button, logos, title } = await companiesLogoSection();

  return (
    <section className={styles.sectionCompanies}>
      <h3>{title}</h3>

      <div className={styles.infinitySliderWrapper}>
        <SliderInfinityLogos data={logos.data} />
      </div>

      <Button theme={button.theme}>{button.name}</Button>
    </section>
  );
}
