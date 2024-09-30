import Button from '@/app/components/Button';
import styles from './styles.module.scss';
import Markdown from 'react-markdown';

export default async function SectionProposal(props) {
  const {
    title,
    description,
    firstDirection,
    twoDirectionsTitle,
    secondDirection,
    consultationBtn,
  } = props;
  return (
    <section className={styles.sectionProposal}>
      <article className={styles.cardProposalArticle}>
        <header>
          <h3>
            <Markdown>{title}</Markdown>
          </h3>

          <Markdown>{description}</Markdown>
        </header>

        <Button size="lg" name={consultationBtn.name} openModal />
      </article>

      <div className={styles.directionsWrapper}>
        <div className={styles.directionsCardTitle}>
          <h5>{twoDirectionsTitle}</h5>
        </div>

        {[firstDirection, secondDirection].map((item, idx) => (
          <div className={styles.directionsCardItem} key={idx}>
            <Markdown>{item}</Markdown>
          </div>
        ))}
      </div>
    </section>
  );
}
