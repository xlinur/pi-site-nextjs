import OpenModalFormButton from '@/app/components/OpenModalFormButton';
import styles from './styles.module.scss';
import Markdown from '@/app/components/Markdown';

const SectionBlockStepsPlan = ({ title, steps, contactBtn }) => {
  return (
    <section className={styles.sectionSteps}>
      <header>
        <h2 className="h3">{title}</h2>
      </header>

      {steps.map((item) => (
        <div className={styles.card} key={item.id}>
          <span>{item.id}</span>

          <div>
            <Markdown>{item.text}</Markdown>

            {steps.at(-1).id === item.id && (
              <OpenModalFormButton theme="primary" name={contactBtn.name} />
            )}
          </div>
        </div>
      ))}

      <div className={styles.btnContactBtn}>
        <OpenModalFormButton theme="primary" name={contactBtn.name} />
      </div>
    </section>
  );
};

export default SectionBlockStepsPlan;
