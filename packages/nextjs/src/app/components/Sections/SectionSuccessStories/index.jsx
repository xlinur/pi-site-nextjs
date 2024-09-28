import Button from '@/app/components/Button';
import SliderCases from '@/app/components/Sliders/SliderCases';

import styles from './styles.module.scss';

import sectionSuccessStories from '@/app/api/strapi/sectionSuccessStories/route';

export default async function SectionTalentMatch({ cases }) {
  const { title, viewAllCasesBtn, contactBtn } = await sectionSuccessStories();

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
