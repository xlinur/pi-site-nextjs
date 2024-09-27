import Button from '@/app/components/Button';
import SliderCases from '@/app/components/Sliders/SliderCases';

import styles from './styles.module.scss';

import sectionTalentMatch from '@/app/api/strapi/sectionTalentMatch/route';

export default function SectionTalentMatch() {
  const { title, viewCasesBtn, items } = sectionTalentMatch();
  return (
    <section className={styles.sectionMoreCases}>
      <div className="container">
        <header>
          <h3>{title}</h3>

          <Button theme="secondary" name={viewCasesBtn.name} />
        </header>
      </div>

      <div className={styles.slider}>
        <SliderCases data={items} />
      </div>
    </section>
  );
}
