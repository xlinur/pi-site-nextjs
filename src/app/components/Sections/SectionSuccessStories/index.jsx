import Button from '@/app/components/Button';
import SliderCases from '@/app/components/Sliders/SliderCases';
import fetchWrapper from '@/app/utils/fetchWrapper';
import styles from './styles.module.scss';

export default async function SectionSuccessStories({ cases, settingsData }) {
  const data = await fetchWrapper('/api/section-success-stories?populate=deep');

  const { title, viewAllCasesBtn, contactBtn } = data.data.attributes;
  const { locale } = settingsData?.data?.attributes || {};

  return (
    <section className={styles.sectionMoreCases}>
      <div className="container">
        <header>
          <h3>{title}</h3>

          <Button theme="secondary" name={viewAllCasesBtn.name} />
        </header>
      </div>

      <div className={styles.slider}>
        <SliderCases
          className={styles.slides}
          data={cases}
          btnName={contactBtn.name}
          locale={locale}
        />
      </div>
    </section>
  );
}
