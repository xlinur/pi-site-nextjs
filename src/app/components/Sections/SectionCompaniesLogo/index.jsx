import OpenModalFormButton from '@/app/components/OpenModalFormButton';
import SliderInfinityLogos from '@/app/components/Sliders/SliderInfinityLogos';
import request from '@/app/utils/request';
import styles from './styles.module.scss';

export default async function CompaniesLogo() {
  const { data } = await request.get('/api/strapi/shared/companies-logos');

  const { addLogoBtn, logos, title } = data.data.attributes;

  return (
    <section className={styles.sectionCompanies}>
      <div className="container">
        <h2>{title}</h2>
      </div>

      <div className={styles.infinitySliderWrapper}>
        <SliderInfinityLogos data={logos.data} />
      </div>

      <OpenModalFormButton name={addLogoBtn.name} />
    </section>
  );
}
