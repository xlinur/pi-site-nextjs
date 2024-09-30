import Button from '@/app/components/Button';
import SliderInfinityLogos from '@/app/components/Sliders/SliderInfinityLogos';

import companiesLogoSection from '@/app/api/strapi/companiesLogoSection/route';
import styles from './styles.module.scss';

export default async function CompaniesLogo() {
  const { addLogoBtn, logos, title } = await companiesLogoSection();

  return (
    <section className={styles.sectionCompanies}>
      <div className="container">
        <h2>{title}</h2>
      </div>

      <div className={styles.infinitySliderWrapper}>
        <SliderInfinityLogos data={logos.data} />
      </div>

      <Button name={addLogoBtn.name} />
    </section>
  );
}
