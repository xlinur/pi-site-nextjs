import Button from '@/app/components/Button';
import SliderCases from '@/app/components/Sliders/SliderCases';
import request from '@/app/utils/request';
import styles from './styles.module.scss';

export default async function SectionTalentMatch({ cases }) {
  const { data } = await request.get('/api/strapi/shared/success-stories');

  const { title, viewAllCasesBtn, contactBtn } = data.data.attributes;

  return (
    <section className={styles.sectionMoreCases}>
      <div className="container">
        <header>
          <h3>{title}</h3>

          <Button theme="secondary" name={viewAllCasesBtn.name} />
        </header>
      </div>

      <div className={styles.slider}>
        <SliderCases data={cases} btnName={contactBtn.name} />
      </div>
    </section>
  );
}
