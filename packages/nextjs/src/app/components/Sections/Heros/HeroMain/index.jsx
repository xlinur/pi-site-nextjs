import Image from 'next/image';
import Button from '@/app/components/Button';
import heroLinesPNG from '@/app/assets/images/hero-lines.png';
import HeroAnimateBg from '../HeroAnimateBg';
import styles from './styles.module.scss';
import qs from 'qs';
import Markdown from 'react-markdown';

// TODO: move into constants.ts within current folder
export const homePageQuery = qs.stringify({
  populate: {
    HeroSection: {
      fields: ['title', 'description'],
    },
  },
});

async function getStrapiHomePage() {
  try {
    const url = new URL('/api/test-page', process.env.STRAPI_API);

    url.search = homePageQuery;

    const res = await fetch(url.href);
    const json = await res.json();

    console.info('Getting strapi data for Home page', { json: json });

    return json.data;
  } catch (error) {
    console.log(error);
  }
}

const HeroMain = async ({
  animateBg = false,
  children,
  title = '',
  description = '',
  actions,
}) => {
  const data = await getStrapiHomePage();

  return (
    <div className={styles.sectionWrapper}>
      <div className="container">
        <section className={styles.sectionHero}>
          <header>
            <Markdown>{data?.attributes.HeroSection.title || title}</Markdown>
            <Markdown>
              {data?.attributes.HeroSection.description || description}
            </Markdown>
          </header>

          <div className={styles.sectionHeroActions}>
            {actions?.map((action, idx) => (
              <Button key={idx} theme="primary" size="lg" withIcon>
                {action.title}
              </Button>
            ))}
          </div>

          {children}
        </section>
      </div>

      {!animateBg ? (
        <div className={styles.sectionHeroDecorImage}>
          <Image src={heroLinesPNG} alt="decor lines hero block" fill></Image>
        </div>
      ) : (
        <HeroAnimateBg className={styles.animateBg} />
      )}
    </div>
  );
};

export default HeroMain;
